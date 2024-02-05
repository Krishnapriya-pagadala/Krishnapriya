package com.MyAmazon.RegPage.DTO;

import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;

import lombok.Data;

@Data
public class AddressDTO {

	private Integer id;
	private String country;
	private String name;
	private String mobileNumber;
	private String pincode;
	private String address1;
	private String address2;
	private String landmark;
	private String city;
	private String state;
private RegistrationDTO registrationDTO;
	
}
