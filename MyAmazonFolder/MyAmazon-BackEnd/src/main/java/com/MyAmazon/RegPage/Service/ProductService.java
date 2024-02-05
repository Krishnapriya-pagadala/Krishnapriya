package com.MyAmazon.RegPage.Service;

import com.MyAmazon.RegPage.DTO.ProductDTO;

public interface ProductService {
	ProductDTO saveProducts(ProductDTO saveDto);
	ProductDTO getProductById(Integer Id);
	void  deleteProduct(Integer Id);

}
