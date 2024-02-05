package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.DTO.CartDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;

public interface CartService {
	 public CartEntity addToCart(Integer productId, Integer quantity, Integer id);
	 public List<CartDTO> getCartItems(Integer id);

	public CartDTO updateQuantity(Integer cart_item_id, Integer quantity);
	
	public String deleteItem(Integer cart_item_id);
	//CartEntity addToCart(Integer productId, Integer quantity, Integer id, Integer price);

}
