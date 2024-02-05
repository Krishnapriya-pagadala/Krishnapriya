package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.DTO.CategoryDTO;
import com.MyAmazon.RegPage.DTO.ProductDTO;

public interface CategoryService {
	CategoryDTO saveCategory(CategoryDTO saveDto);
List<ProductDTO> findProductByCategory(String CategoryName);


List<ProductDTO> findProductByProductName(String ProductName);

}
