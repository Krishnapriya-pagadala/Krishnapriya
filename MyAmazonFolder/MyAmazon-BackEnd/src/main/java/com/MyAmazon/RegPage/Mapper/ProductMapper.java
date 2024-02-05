package com.MyAmazon.RegPage.Mapper;

import org.springframework.stereotype.Component;

import com.MyAmazon.RegPage.DTO.ProductDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;

@Component
public class ProductMapper {
	public ProductsEntity toProductsEntity(ProductDTO dto) {
		ProductsEntity productsEntity=new ProductsEntity();
		productsEntity.setProduct_id(dto.getProduct_id());
		productsEntity.setProductName(dto.getProductName());
		productsEntity.setPrice(dto.getPrice());
		productsEntity.setOfferPrice(dto.getOfferPrice());
		productsEntity.setDiscount(dto.getDiscount());
		productsEntity.setDescription(dto.getDescription());
		productsEntity.setImgUrl(dto.getImgUrl());
		return productsEntity;
		
	}
	public ProductDTO toProductDTO(ProductsEntity entity) {
		ProductDTO productDTO= new ProductDTO();
		productDTO.setProduct_id(entity.getProduct_id());
		productDTO.setProductName(entity.getProductName());
		productDTO.setPrice(entity.getPrice());
		productDTO.setOfferPrice(entity.getOfferPrice());
		productDTO.setDiscount(entity.getDiscount());
		productDTO.setDescription(entity.getDescription());
		productDTO.setImgUrl(entity.getImgUrl());
		return productDTO;
		
	}
	

}
