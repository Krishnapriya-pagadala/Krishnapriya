package com.MyAmazon.RegPage.DTO;

import lombok.Data;

@Data
public class RegistrationDTO {

	private Integer id;
	private String userName;
	private String mobileNumber;
	private String email;
	private String password;
	private String primeMember;
}
