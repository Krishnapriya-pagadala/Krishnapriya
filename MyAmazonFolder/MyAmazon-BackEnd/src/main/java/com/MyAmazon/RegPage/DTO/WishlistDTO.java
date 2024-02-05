package com.MyAmazon.RegPage.DTO;

import lombok.Data;

@Data
public class WishlistDTO {
	private Integer wishlist_item_id;
	private ProductDTO productDTO;
	private RegistrationDTO registrationDTO;

}
