package com.MyAmazon.RegPage.DTO;

import lombok.Data;

@Data
public class CartDTO {
	private Integer cart_item_id;
	private Integer quantity;

	private ProductDTO productDTO;
	private RegistrationDTO registrationDTO;

}
