package com.MyAmazon.RegPage.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.MyAmazon.RegPage.DTO.ProductDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
import com.MyAmazon.RegPage.Service.ProductService;

@RestController
@RequestMapping("/Products")
@CrossOrigin("*")
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@PostMapping("/SaveProducts")
	public ResponseEntity<ProductDTO> saveCategory(@RequestBody ProductDTO save) {
		
		return new ResponseEntity<ProductDTO>(productService.saveProducts(save),HttpStatus.CREATED);
	}
	
	

}
