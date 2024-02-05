package com.MyAmazon.RegPage.ServiceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.ProductDTO;
import com.MyAmazon.RegPage.Mapper.ProductMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
import com.MyAmazon.RegPage.Repository.ProductRepository;
import com.MyAmazon.RegPage.Service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductMapper mapper;
	@Autowired
	private ProductRepository repository;

	@Override
	public ProductDTO saveProducts(ProductDTO saveDto) {
		
		return mapper.toProductDTO(repository.save(mapper.toProductsEntity(saveDto)));
	}

	@Override
	public ProductDTO getProductById(Integer Id) {
		Optional<ProductsEntity> productsEntity=repository.findById(Id);
		
		return mapper.toProductDTO(productsEntity.get());
	}

	@Override
	public void deleteProduct(Integer Id) {
		repository.deleteById(Id);

	
	}

}
