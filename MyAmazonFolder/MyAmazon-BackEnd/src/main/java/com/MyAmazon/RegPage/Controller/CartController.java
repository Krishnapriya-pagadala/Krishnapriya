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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyAmazon.RegPage.DTO.CartDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;
import com.MyAmazon.RegPage.Service.CartService;

@RestController
@RequestMapping("/Cart")
@CrossOrigin("*")
public class CartController {
	@Autowired
	public CartService service;
	

@PostMapping("add/{productid}/{userId}/{quantity}")
public ResponseEntity<Object> addToCart(@PathVariable Integer productid, @PathVariable Integer userId, @PathVariable Integer quantity){
	ResponseEntity<Object> responseEntity=new ResponseEntity<Object>(HttpStatus.OK);
	CartEntity response=service.addToCart(productid, quantity, userId);
	responseEntity=new ResponseEntity<Object>(response,HttpStatus.CREATED);
	
	
	return responseEntity;
	
}
@GetMapping("item/{userId}")
public ResponseEntity<List<CartDTO>>getAllCartProducts(@PathVariable Integer userId){
	ResponseEntity<List<CartDTO>> responseEntity=new ResponseEntity<List<CartDTO>>(HttpStatus.OK);
	responseEntity = new ResponseEntity<>(service.getCartItems(userId),HttpStatus.OK);
	
	
	return responseEntity;
	
}

@PutMapping("updateQuantity/{cart_item_id}/{updateQuantity}")
public ResponseEntity<CartDTO>updateQuantity(@PathVariable Integer cart_item_id, @PathVariable Integer updateQuantity){
	ResponseEntity<CartDTO>responseEntity=new ResponseEntity<CartDTO>(HttpStatus.OK);
	responseEntity=new ResponseEntity<CartDTO>(service.updateQuantity(cart_item_id, updateQuantity),HttpStatus.OK);
	return responseEntity;
	
}

//@PutMapping("updatePrice/{cart_item_id}/{price}")
//public ResponseEntity<CartDTO>updatePrice(@PathVariable Integer cart_item_id,@PathVariable Integer price){
//	ResponseEntity<CartDTO>responseEntity=new ResponseEntity<CartDTO>(HttpStatus.OK);
//	responseEntity=new ResponseEntity<CartDTO>(service.updatePrice(cart_item_id, price),HttpStatus.OK);
//	
//	return responseEntity;
//	
//}

@DeleteMapping("deleteItem/{cart_item_id}")
public ResponseEntity<Object>deleteItem(@PathVariable Integer cart_item_id ){
	ResponseEntity<Object> responseEntity=new ResponseEntity<Object>(HttpStatus.OK);
	responseEntity =new ResponseEntity<Object>(service.deleteItem(cart_item_id),HttpStatus.OK);
	return responseEntity;
	
}




	
	

}
