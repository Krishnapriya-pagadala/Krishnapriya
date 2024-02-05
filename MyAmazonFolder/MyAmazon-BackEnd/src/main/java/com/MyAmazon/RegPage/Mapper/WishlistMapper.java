package com.MyAmazon.RegPage.Mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.MyAmazon.RegPage.DTO.WishlistDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.WishlistEntity;

@Component
public class WishlistMapper {
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private RegistrationMapper registrationMapper;
	
	public WishlistEntity toWishlistEntity(WishlistDTO dto) {
		WishlistEntity wishlistEntity= new WishlistEntity();
		wishlistEntity.setWishlist_item_id(dto.getWishlist_item_id());
		wishlistEntity.setRegistrationPage(registrationMapper.toRegistrationPageEntity(dto.getRegistrationDTO()));
		wishlistEntity.setProductsEntity(productMapper.toProductsEntity(dto.getProductDTO()));
		return wishlistEntity;
		
	}
	
	public WishlistDTO toWishlistDTO(WishlistEntity entity) {
		WishlistDTO wishlistDTO=new WishlistDTO();
		wishlistDTO.setWishlist_item_id(entity.getWishlist_item_id());
		wishlistDTO.setRegistrationDTO(registrationMapper.toRegistrationDTO(entity.getRegistrationPage()));
		wishlistDTO.setProductDTO(productMapper.toProductDTO(entity.getProductsEntity()));
		return wishlistDTO;
		
	}

}
