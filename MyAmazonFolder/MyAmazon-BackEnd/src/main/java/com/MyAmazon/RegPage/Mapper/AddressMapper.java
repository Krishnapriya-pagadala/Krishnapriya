package com.MyAmazon.RegPage.Mapper;

import java.security.PublicKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.MyAmazon.RegPage.DTO.AddressDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.AddressEntity;

@Component

public class AddressMapper {
	@Autowired
	private RegistrationMapper registrationMapper;
	public AddressEntity toAddressEntity(AddressDTO dto) {
		
		
		AddressEntity addressEntity= new AddressEntity();
		addressEntity.setAddress_id(dto.getId());
		addressEntity.setCountry(dto.getCountry());
		addressEntity.setName(dto.getName());
		addressEntity.setMobileNumber(dto.getMobileNumber());
		addressEntity.setPincode(dto.getPincode());
		addressEntity.setAddress1(dto.getAddress1());
		addressEntity.setAddress2(dto.getAddress2());
		addressEntity.setLandmark(dto.getLandmark());
		addressEntity.setCity(dto.getCity());
		addressEntity.setState(dto.getState());
		
		return addressEntity;
		
	}
	public AddressDTO toAddressDTO(AddressEntity entity ) {
		AddressDTO addDto=new AddressDTO();
		addDto.setId(entity.getAddress_id());
		addDto.setCountry(entity.getCountry());
		addDto.setName(entity.getName());
		addDto.setMobileNumber(entity.getMobileNumber());
		addDto.setPincode(entity.getPincode());
		addDto.setAddress1(entity.getAddress1());
		addDto.setAddress2(entity.getAddress2());
		addDto.setLandmark(entity.getLandmark());
		addDto.setCity(entity.getCity());
		addDto.setState(entity.getState());
	
		
		
		return addDto;
		
	}
	
}
