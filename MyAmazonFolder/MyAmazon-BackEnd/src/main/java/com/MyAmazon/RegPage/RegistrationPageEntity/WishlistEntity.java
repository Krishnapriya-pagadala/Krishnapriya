package com.MyAmazon.RegPage.RegistrationPageEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name = "wishlist")
public class WishlistEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer wishlist_item_id;
	
	@ManyToOne
	@JoinColumn(name = "id")
	private RegistrationPage registrationPage;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	private ProductsEntity productsEntity;

}
