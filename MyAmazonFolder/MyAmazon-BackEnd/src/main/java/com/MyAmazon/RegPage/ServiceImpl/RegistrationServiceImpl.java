package com.MyAmazon.RegPage.ServiceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.DTO.RegistrationDTO;

import com.MyAmazon.RegPage.Exceptions.ResourceNotFoundException;
import com.MyAmazon.RegPage.Mapper.RegistrationMapper;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;
import com.MyAmazon.RegPage.Repository.RegistrationRepository;
import com.MyAmazon.RegPage.Service.RegistrationService;


@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	private RegistrationMapper mapper;
	
	@Autowired
	private RegistrationRepository repository;
	
	
//	@Override
//	public RegistrationDTO saveResgistration(RegistrationDTO regDTO) {
//	RegistrationPage user=mapper.toRegistrationPageEntity(regDTO);
//		BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
//     	String encryptedPwd=bcrypt.encode(regDTO.getPassword());
//		user.setPassword(encryptedPwd);
//		
//		return mapper.toRegistrationDTO(repository.save(user));
//	}

	@Override
	public RegistrationDTO getRegistrationById(Integer id)   {
		Optional<RegistrationPage>registrationPage=repository.findById(id);
//		if (registrationPage.isPresent())
			return mapper.toRegistrationDTO(registrationPage.get());
//		else {
//			throw new ResourceNotFoundException("No user with the given id");
			
		}	

	
	@Override
	public void deleteRegistration(Integer id) throws Exception {
		if (repository.findById(id).isPresent()) {
			repository.deleteById(id);
			return;
		}

		throw new ResourceNotFoundException("No user with the given id");
	}
	
	public RegistrationDTO findByEmail(String email)  {
		RegistrationPage regpage = repository.findByEmail(email);
		return mapper.toRegistrationDTO(regpage);
	}


	@Override
	public RegistrationDTO findBypassword(String password) {
		RegistrationPage regpage = repository.findByPassword(password);
		return mapper.toRegistrationDTO(regpage);
	}
	

	@Override
	public RegistrationDTO findBymobileNumber(String mobileNumber) {
		RegistrationPage regpage = repository.findBymobileNumber(mobileNumber);
		return mapper.toRegistrationDTO(regpage);

}

	@Override
	public RegistrationDTO saveResgistration(RegistrationDTO regDTO) {
		RegistrationPage user=mapper.toRegistrationPageEntity(regDTO);
		user.setPrimeMember(" You are not a prime member");
		return mapper.toRegistrationDTO(repository.save(user));
	}


	@Override
	public RegistrationDTO updateUser(RegistrationDTO updateDto, Integer id) {
		RegistrationPage regpage=repository.findById(id).get();
		regpage.setEmail(updateDto.getEmail());
		regpage.setMobileNumber(updateDto.getMobileNumber());
		regpage.setUserName(updateDto.getUserName());
		regpage.setPassword(updateDto.getPassword());
		
		

		return mapper.toRegistrationDTO(repository.save(regpage));
		
	
	}


	@Override
	public RegistrationDTO updatePrime(Integer id) {
		RegistrationPage registrationPage=repository.findById(id).get();
		registrationPage.setPrimeMember("you are a prime member");
	
		return mapper.toRegistrationDTO(repository.save(registrationPage));
	}
}
