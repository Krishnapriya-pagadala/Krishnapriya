package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.DTO.WishlistDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.WishlistEntity;

public interface WishlistService {
	public WishlistEntity addToWishlist(Integer productId,Integer id);
	public List<WishlistDTO> getWishlistItems(Integer id);
	public String deleteItems(Integer wishlist_item_id);

}
