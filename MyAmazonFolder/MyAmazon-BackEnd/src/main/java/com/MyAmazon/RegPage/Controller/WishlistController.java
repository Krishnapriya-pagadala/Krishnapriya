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

import com.MyAmazon.RegPage.DTO.WishlistDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.WishlistEntity;
import com.MyAmazon.RegPage.Service.WishlistService;

@RestController
@RequestMapping("/wishlist")
@CrossOrigin("*")
public class WishlistController {
	@Autowired
	public WishlistService wishlistService;
	
	@PostMapping("/add/{productId}/{userId}")
	public ResponseEntity<Object>addtoWishlist(@PathVariable Integer productId, @PathVariable Integer userId){
		ResponseEntity<Object>responseEntity=new ResponseEntity<Object>(HttpStatus.OK);
		WishlistEntity resonse=wishlistService.addToWishlist(productId, userId);
		responseEntity=new ResponseEntity<Object>(resonse,HttpStatus.CREATED);
		return responseEntity;
		
	}
	
	@GetMapping("/get/{userId}")
	public ResponseEntity<List<WishlistDTO>>getAllWishlistProducts(@PathVariable Integer userId){
		ResponseEntity<List<WishlistDTO>>responseEntity=new ResponseEntity<List<WishlistDTO>>(HttpStatus.OK);
		responseEntity=new ResponseEntity<>(wishlistService.getWishlistItems(userId),HttpStatus.OK);
		return responseEntity;
		
	}
	
	@DeleteMapping("/deleteItem/{wishlist_item_id}")
	public ResponseEntity<Object>deleteItems(@PathVariable Integer wishlist_item_id){
		ResponseEntity<Object>responseEntity=new ResponseEntity<Object>(HttpStatus.OK);
		responseEntity=new ResponseEntity<Object>(wishlistService.deleteItems(wishlist_item_id),HttpStatus.OK);
		return responseEntity;
		
	}
	

}
