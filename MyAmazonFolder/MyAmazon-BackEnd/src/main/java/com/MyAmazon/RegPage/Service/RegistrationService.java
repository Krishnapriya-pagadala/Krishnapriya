package com.MyAmazon.RegPage.Service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.MyAmazon.RegPage.DTO.RegistrationDTO;

import com.MyAmazon.RegPage.Exceptions.ResourceNotFoundException;

public interface RegistrationService {
	RegistrationDTO saveResgistration(RegistrationDTO regDTO);
	RegistrationDTO getRegistrationById(Integer id) throws ResourceNotFoundException;
	void deleteRegistration(Integer id) throws Exception;
	
	RegistrationDTO findByEmail(String email);
	RegistrationDTO findBymobileNumber(String mobileNumber);
	RegistrationDTO findBypassword(String password);
	
	RegistrationDTO updateUser(RegistrationDTO updateDto, Integer id);
	RegistrationDTO updatePrime( Integer id);
	
	
	
}
