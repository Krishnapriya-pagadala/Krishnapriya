package com.MyAmazon.RegPage.DTO;

import lombok.Data;

@Data
public class ProductDTO {
	private Integer product_id;
	private String productName;
	private String price;
	private String offerPrice;
	private String discount;
	private String description;
	private String imgUrl;

	
	

}
