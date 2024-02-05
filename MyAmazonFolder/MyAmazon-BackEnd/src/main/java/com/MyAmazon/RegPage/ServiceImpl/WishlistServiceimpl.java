package com.MyAmazon.RegPage.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.CartDTO;
import com.MyAmazon.RegPage.DTO.WishlistDTO;
import com.MyAmazon.RegPage.Mapper.WishlistMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;
import com.MyAmazon.RegPage.RegistrationPageEntity.WishlistEntity;
import com.MyAmazon.RegPage.Repository.ProductRepository;
import com.MyAmazon.RegPage.Repository.RegistrationRepository;
import com.MyAmazon.RegPage.Repository.WishlistRepository;
import com.MyAmazon.RegPage.Service.WishlistService;

@Service
public class WishlistServiceimpl implements WishlistService{
	
	@Autowired
	private WishlistMapper wishlistMapper;
	@Autowired
	private WishlistRepository wishlistRepository;
	@Autowired
	private RegistrationRepository registrationRepository;
	@Autowired
	private ProductRepository productRepository;
	@Override
	public WishlistEntity addToWishlist(Integer productId, Integer id) {
		ProductsEntity products=productRepository.findById(productId).get();
		RegistrationPage user=registrationRepository.findById(id).get();
		WishlistEntity wishlist=wishlistRepository.findByUserandProducts(id,productId);
		wishlist= new WishlistEntity();
		wishlist.setRegistrationPage(user);
		wishlist.setProductsEntity(products);
		wishlistRepository.save(wishlist);
		
		return wishlist;
	}
	@Override
	public List<WishlistDTO> getWishlistItems(Integer id) {
		RegistrationPage userDetails=registrationRepository.findById(id).get();
		List<WishlistEntity> wishlistItems=wishlistRepository.findByRegistrationPage(userDetails);
		List<WishlistDTO> wishlistDTOProductList=wishlistItems.stream().map(wishlistMapper::toWishlistDTO).collect(Collectors.toList());
		return wishlistDTOProductList;
	}
	@Override
	public String deleteItems(Integer wishlist_item_id) {
		String message="";
		wishlistRepository.deleteById(wishlist_item_id);
		message="Deleted from cart";
	
		return message;
	}
	


}
