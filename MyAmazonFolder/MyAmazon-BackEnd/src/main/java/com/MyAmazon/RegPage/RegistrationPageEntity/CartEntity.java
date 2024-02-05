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
@Table(name = "cart_item")
public class CartEntity {
	@Id
	@GeneratedValue  (strategy = GenerationType.IDENTITY)
	private Integer cart_item_id;
	private Integer quantity;
	
	
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	private ProductsEntity productsEntity;
	
	@ManyToOne
	@JoinColumn(name = "id")
	private RegistrationPage registrationPageEntity;
	
	
	
	
	

}
