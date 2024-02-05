package com.MyAmazon.RegPage.ServiceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.CategoryDTO;
import com.MyAmazon.RegPage.DTO.ProductDTO;
import com.MyAmazon.RegPage.Mapper.CategoryMapper;
import com.MyAmazon.RegPage.Mapper.ProductMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.CategoriesEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
import com.MyAmazon.RegPage.Repository.CategoryRepository;
import com.MyAmazon.RegPage.Repository.ProductRepository;
import com.MyAmazon.RegPage.Service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryMapper mapper;
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private CategoryRepository repository;
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public CategoryDTO saveCategory(CategoryDTO saveDto) {
		List<ProductDTO> productDTOs=saveDto.getProductDto();
		List<ProductsEntity> productsEntities=new ArrayList<>();
		CategoriesEntity CategoriesEntity=mapper.toCategoriesEntity(saveDto);
		for(ProductDTO product:productDTOs) {
			ProductsEntity proentity=productMapper.toProductsEntity(product);
			proentity.setCategoriesEntity(CategoriesEntity);
			productsEntities.add(proentity);
		}
		CategoriesEntity.setProductsEntities(productsEntities);		
		CategoryDTO dto=mapper.toCategoryDTO(repository.save(CategoriesEntity));
		List<ProductDTO>products=new ArrayList<>();
		for(ProductsEntity p:productsEntities) {
			products.add(productMapper.toProductDTO(p));
		}
		
		dto.setProductDto(productDTOs);
		return dto;
		
	}

	@Override
	public List<ProductDTO> findProductByCategory(String CategoryName) {
		CategoriesEntity categoriesEntity=repository.findByName(CategoryName);
		int categoryId=categoriesEntity.getCategory_id();
		System.out.println(categoryId);
		List<ProductsEntity> products=productRepository.findByCategoryId(categoryId);
		List<ProductDTO> productDTOs=new ArrayList<>();
		
	for(ProductsEntity pro:products) {
		ProductDTO dto=productMapper.toProductDTO(pro);
		System.out.println(dto);
		productDTOs.add(dto);
		
	}
		return productDTOs;
	}

	@Override
	public List<ProductDTO> findProductByProductName(String ProductName) {
		List<ProductsEntity> productsEntity=productRepository.findByProductNameContaining(ProductName);
		List<ProductDTO> productDTOs=new ArrayList<>();
		
		for(ProductsEntity p:productsEntity) {
			ProductDTO dto=productMapper.toProductDTO(p);
			productDTOs.add(dto);
			
		}

		 return productDTOs;
	}



	


	
	
//	@Override
//	public RegistrationDTO findBypassword(String password) {
//		RegistrationPage regpage = repository.findByPassword(password);
//		return mapper.toRegistrationDTO(regpage);
//	}
	
	

}
