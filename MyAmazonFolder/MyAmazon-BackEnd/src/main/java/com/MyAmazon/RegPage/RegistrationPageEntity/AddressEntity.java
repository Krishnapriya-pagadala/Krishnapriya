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
@Table(name ="address_table")
public class AddressEntity {
	@Id
	@GeneratedValue  (strategy = GenerationType.IDENTITY)
	private Integer address_id;
	private String country;
	private String name;
	private String mobileNumber;
	private String pincode;
	private String address1;
	private String address2;
	private String landmark;
	private String city;
	private String state;
	
	@ManyToOne
	@JoinColumn(name = "id")
	private RegistrationPage registrationPage;
	

}
