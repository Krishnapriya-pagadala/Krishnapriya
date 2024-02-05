package com.MyAmazon.RegPage.RegistrationPageEntity;

import java.util.List;

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
@Table(name = "order_items")
public class OrderItemsEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderItemsId;
	private Integer Quantity;
	
	@ManyToOne
	@JoinColumn(name = "orderId")
	private OrderEntity orderEntities;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
   private ProductsEntity productsEntities;
	

}
