package com.MyAmazon.RegPage.RegistrationPageEntity;

import java.util.List;

import com.fasterxml.jackson.core.sym.Name;

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
@Table(name = "oder_table")
public class OrderEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;
	private Integer orderPrice;
	private String Address;
	
	@ManyToOne
	@JoinColumn(name = "id")
	private RegistrationPage registrationPage;
	
	@OneToMany(mappedBy = "orderEntities",cascade = CascadeType.ALL)
	private List<OrderItemsEntity> oderItemsEntities;
	

}
