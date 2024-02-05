package com.MyAmazon.RegPage.RegistrationPageEntity;



import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name ="product_table")
public class ProductsEntity {
	@Id
	@GeneratedValue  (strategy = GenerationType.IDENTITY)
	private Integer product_id;
	private String productName;
	private String price;
	private String offerPrice;
	private String discount;
	private String description;
	private String imgUrl;
	@ManyToOne
	@JoinColumn(name ="category_id")
	private CategoriesEntity categoriesEntity;
	
	@OneToMany(mappedBy = "productsEntity", cascade = CascadeType.ALL)
	List<CartEntity> cartEntities;
	
	@OneToMany(mappedBy = "productsEntities",cascade = CascadeType.ALL)
	List<OrderItemsEntity> orderItemsEntities;

}
