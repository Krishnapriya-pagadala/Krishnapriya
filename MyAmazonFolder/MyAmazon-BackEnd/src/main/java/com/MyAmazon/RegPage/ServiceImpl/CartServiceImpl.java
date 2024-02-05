package com.MyAmazon.RegPage.ServiceImpl;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.CartDTO;
import com.MyAmazon.RegPage.Mapper.CartMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;
import com.MyAmazon.RegPage.Repository.CartRepository;
import com.MyAmazon.RegPage.Repository.ProductRepository;
import com.MyAmazon.RegPage.Repository.RegistrationRepository;
import com.MyAmazon.RegPage.Service.CartService;

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	private CartMapper cartMapper;
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private RegistrationRepository registrationRepository;
	
	@Override
	public CartEntity addToCart(Integer productId,  Integer quantity, Integer id) {
	
		ProductsEntity product=productRepository.findById(productId).get();
		RegistrationPage user=registrationRepository.findById(id).get();
		CartEntity cart=cartRepository.findByUserAndProduct(id, productId);
//		if(cart!=null) {
////			quantity+=cart.getQuantity();
////			cart.setQuantity(quantity);
////			price+=cart.getCart_price();
////			cart.setCart_price(price);
////			price=quantity*cart.getCart_price();
////			cart.setCart_price(price);
//			
//		}
//		else {
			cart =new CartEntity();
			cart.setQuantity(quantity);
			cart.setProductsEntity(product);
			cart.setRegistrationPageEntity(user);
//		}
		cartRepository.save(cart);
		
		return cart;
		
	}
	@Override
	public List<CartDTO> getCartItems(Integer id) {
	RegistrationPage userDetails=registrationRepository.findById(id).get();
	List<CartEntity> cartItems=cartRepository.findByRegistrationPageEntity(userDetails);
	List<CartDTO> cartDTOProductList=cartItems.stream().map(cartMapper::toCartDTO).collect(Collectors.toList());
		return cartDTOProductList;
	}
	@Override
	public CartDTO updateQuantity(Integer cart_item_id, Integer quantity) {
		CartEntity cart=cartRepository.findById(cart_item_id).get();
	cart.setQuantity(quantity);
	cartRepository.save(cart);
		return cartMapper.toCartDTO(cart);
	}
//	@Override
//	public CartDTO updatePrice(Integer cart_item_id, Integer price) {
//		CartEntity cart=cartRepository.findById(cart_item_id).get();
//		cart.setCart_price(price);
//		cartRepository.save(cart);
//		
//		return cartMapper.toCartDTO(cart);
//	}
	@Override
	public String deleteItem(Integer cart_item_id) {
		String message="";
		cartRepository.deleteById(cart_item_id);
		message="Deleted from cart";
		
		return message;
	
		
	}


//
//@Override
//public CartDTO saveCart(CartDTO dto) {
//
//	return cartMapper.toCartDTO(cartRepository.save(cartMapper.toCartEntity(dto)));
//}
//
//@Override
//public CartDTO getCartItem(Integer id) {
//	Optional<CartEntity> cartEntity=cartRepository.findById(id);
//	return cartMapper.toCartDTO(cartEntity.get());
//}
//
//@Override
//public CartDTO updateQuantity(CartDTO quantity) {
//	
//	return cartMapper.toCartDTO(cartRepository.save(cartMapper.toCartEntity(quantity)));
//}
//
//@Override
//public CartDTO updatePrice(CartDTO price) {
//
//	return cartMapper.toCartDTO(cartRepository.save(cartMapper.toCartEntity(price)));
//}
//
//@Override
//public void deleteItem(Integer id) {
//	
//	
//}
//	
	
	

}
