package com.MyAmazon.RegPage.Mapper;

import org.springframework.stereotype.Component;

import com.MyAmazon.RegPage.DTO.RegistrationDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;

@Component
public class RegistrationMapper {
	public RegistrationPage toRegistrationPageEntity(RegistrationDTO dto) {
		
		RegistrationPage regpage =new RegistrationPage();
		
		regpage.setUserName(dto.getUserName());
		regpage.setMobileNumber(dto.getMobileNumber());
		regpage.setEmail(dto.getEmail());
		regpage.setPassword(dto.getPassword());
		regpage.setPrimeMember(dto.getPrimeMember());
		
		
		return regpage;	
	}
	public RegistrationDTO toRegistrationDTO(RegistrationPage register) {
		RegistrationDTO regDTO =new RegistrationDTO();
		
		regDTO.setId(register.getId());
		regDTO.setUserName(register.getUserName());
		regDTO.setMobileNumber(register.getMobileNumber());
		regDTO.setEmail(register.getEmail());
		regDTO.setPassword(register.getPassword());
		regDTO.setPrimeMember(register.getPrimeMember());
		
		
		
		return regDTO;
		
	}

}
