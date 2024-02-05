package com.MyAmazon.RegPage.ServiceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.AddressDTO;
import com.MyAmazon.RegPage.Mapper.AddressMapper;
import com.MyAmazon.RegPage.Mapper.RegistrationMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;
import com.MyAmazon.RegPage.Repository.AddressRepository;
import com.MyAmazon.RegPage.Repository.RegistrationRepository;
import com.MyAmazon.RegPage.Service.AddressService;
import com.MyAmazon.RegPage.RegistrationPageEntity.*;

@Service
public class AddressServiceImpl implements AddressService {
	@Autowired
	private AddressMapper addressMapper;
	@Autowired
	private AddressRepository addrepo;
	
	@Autowired
	private RegistrationMapper registrationMapper;
	
	@Autowired
	private RegistrationRepository registerRepo;

	@Override
	public AddressDTO saveAddress(Integer id, AddressDTO dtoAdd) {

		RegistrationPage register=registerRepo.findById(id).get();
		AddressEntity adress=  addressMapper.toAddressEntity(dtoAdd);
		adress.setRegistrationPage(register);
		AddressDTO dto=addressMapper.toAddressDTO(addrepo.save(adress));
		dto.setRegistrationDTO(registrationMapper.toRegistrationDTO(register));
		
		
		return dto;

	}

	@Override
	public AddressDTO updateAddress(AddressDTO dtoAdd,Integer addressId) {
		AddressEntity adressEntity=addrepo.findById(addressId).get();
//		adressEntity.setAddress_id(dtoAdd.getId());
		adressEntity.setAddress1(dtoAdd.getAddress1());
		adressEntity.setAddress2(dtoAdd.getAddress2());
		adressEntity.setCity(dtoAdd.getCity());
		adressEntity.setCountry(dtoAdd.getCountry());
		adressEntity.setLandmark(dtoAdd.getLandmark());
		adressEntity.setMobileNumber(dtoAdd.getMobileNumber());
		adressEntity.setName(dtoAdd.getName());
		adressEntity.setPincode(dtoAdd.getPincode());
		adressEntity.setState(dtoAdd.getState());
		
		
		
		return addressMapper.toAddressDTO(addrepo.save(adressEntity)) ;

	}


	@Override
	public void deleteAddress(Integer id) {
		addrepo.deleteById(id);
		
	}

@Override
public List<AddressDTO> getAllAdress(Integer id) {
	RegistrationPage userDetails=registerRepo.findById(id).get();
	List<AddressEntity> userAddress=addrepo.findByRegistrationPage(userDetails);
	List<AddressDTO> userAddressDTO=userAddress.stream().map(addressMapper::toAddressDTO).collect(Collectors.toList());
	

	return userAddressDTO;
}

@Override
public AddressDTO getAddressById(Integer addressId) {
	
	AddressEntity addressEntity=addrepo.findById(addressId).get();
	return addressMapper.toAddressDTO(addressEntity);
}

//@Override
//public AddressDTO updateAddress(AddressDTO dtoAdd, Integer addressId) {
//	// TODO Auto-generated method stub
//	return null;
//}


}
