package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.DTO.AddressDTO;

public interface AddressService {
	AddressDTO saveAddress(Integer id, AddressDTO dtoAdd);
	AddressDTO updateAddress(AddressDTO dtoAdd, Integer addressId);
	AddressDTO getAddressById(Integer addressId);
	List<AddressDTO> getAllAdress(Integer id);
	
	void deleteAddress(Integer id);
	

}
