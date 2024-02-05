package com.MyAmazon.RegPage.DTO;

import java.util.List;

import lombok.Data;

@Data
public class CategoryDTO {
	private Integer id;
	private String CategoryName;
private List<ProductDTO> productDto;

}
