package com.MyAmazon.RegPage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyAmazon.RegPage.DTO.CategoryDTO;
import com.MyAmazon.RegPage.DTO.ProductDTO;
import com.MyAmazon.RegPage.Service.CategoryService;


@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/save")
	public ResponseEntity<CategoryDTO> saveCategory(@RequestBody CategoryDTO save){
		
		return new ResponseEntity<CategoryDTO>(categoryService.saveCategory(save),HttpStatus.CREATED);
		
	}
	@GetMapping("/getCategory/{name}")
	public ResponseEntity<List<ProductDTO>> getCategoryByname(@PathVariable String name){
		return new ResponseEntity<List<ProductDTO>>( categoryService.findProductByCategory(name),HttpStatus.OK);
		
	}
	@GetMapping("/getProduct/{productName}")
	public ResponseEntity<List<ProductDTO>> getProductByName(@PathVariable String productName){
		return new ResponseEntity<List<ProductDTO>>(categoryService.findProductByProductName(productName),HttpStatus.OK);
		
	}
//	
//	@DeleteMapping("deleteCategory/{id}")
//	public ResponseEntity<String> deleteCategoryById(@PathVariable Integer id){
//		categoryService.deleteCategory(id);
//		return new ResponseEntity<String> ("Deleted Successfully",HttpStatus.OK) ;
//		
//	}
	
	
	

}
