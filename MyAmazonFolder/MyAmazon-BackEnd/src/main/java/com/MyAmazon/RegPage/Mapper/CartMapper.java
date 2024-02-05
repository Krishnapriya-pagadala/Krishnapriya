package com.MyAmazon.RegPage.Mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.MyAmazon.RegPage.DTO.CartDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;
@Component

public class CartMapper {
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private RegistrationMapper registrationMapper;
	
	public CartEntity toCartEntity(CartDTO dto) {
		CartEntity cartEntity= new CartEntity();
		cartEntity.setQuantity(dto.getQuantity());
	
		cartEntity.setProductsEntity(productMapper.toProductsEntity(dto.getProductDTO()));
		cartEntity.setRegistrationPageEntity(registrationMapper.toRegistrationPageEntity(dto.getRegistrationDTO()));
		return cartEntity;
	}

	
	public CartDTO toCartDTO(CartEntity entity) {
		CartDTO cartDTO= new CartDTO();
		cartDTO.setCart_item_id(entity.getCart_item_id());
		cartDTO.setQuantity(entity.getQuantity());
	
		cartDTO.setProductDTO(productMapper.toProductDTO(entity.getProductsEntity()));
		cartDTO.setRegistrationDTO(registrationMapper.toRegistrationDTO(entity.getRegistrationPageEntity()));
		return cartDTO;
		
	}
}

