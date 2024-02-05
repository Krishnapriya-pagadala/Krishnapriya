package com.MyAmazon.RegPage.RegistrationPageEntity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name ="Category_table")
public class CategoriesEntity {
	@Id
	@GeneratedValue  (strategy = GenerationType.IDENTITY)
	private Integer category_id;
	private String CategoryName;
	
	  @OneToMany( mappedBy="categoriesEntity" ,cascade = CascadeType.ALL)
	  List<ProductsEntity> productsEntities;


}
