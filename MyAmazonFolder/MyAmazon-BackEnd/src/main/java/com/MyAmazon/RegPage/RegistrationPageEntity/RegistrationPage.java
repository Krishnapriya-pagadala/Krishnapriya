package com.MyAmazon.RegPage.RegistrationPageEntity;

import java.util.List;

import org.hibernate.annotations.Cascade;

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
@Table(name = "amazon_registration_table")
public class RegistrationPage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String userName;
	private String mobileNumber;
	private String email;
	private String password;
	private String primeMember;
	
	@OneToMany(mappedBy = "registrationPageEntity", cascade = CascadeType.ALL)
	List<CartEntity> cartEntities;
	
	@OneToMany(mappedBy = "registrationPage", cascade = CascadeType.ALL)
	List<OrderEntity> orderEntities;
	
	@OneToMany(mappedBy = "registrationPage",cascade = CascadeType.ALL)
	List<AddressEntity> addressEntities;

}
