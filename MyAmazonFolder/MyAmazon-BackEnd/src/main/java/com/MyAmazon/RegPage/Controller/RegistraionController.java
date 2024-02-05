package com.MyAmazon.RegPage.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.SchedulingAwareRunnable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyAmazon.RegPage.DTO.RegistrationDTO;
import com.MyAmazon.RegPage.Service.RegistrationService;



@RestController
@RequestMapping("registration")
@CrossOrigin("*")
public class RegistraionController {
	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/register")
	public ResponseEntity<RegistrationDTO> creatEntity(@RequestBody RegistrationDTO registrationDTO){
		return new ResponseEntity<RegistrationDTO>(registrationService.saveResgistration(registrationDTO),HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getUserById/{id}")
	public ResponseEntity<RegistrationDTO> getRegistrationById(@PathVariable Integer id) throws Exception {
		return new ResponseEntity<RegistrationDTO>(registrationService.getRegistrationById(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUserById/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable int id) throws Exception {
		registrationService.deleteRegistration(id);
		return new ResponseEntity<String>("Deleted Successfully...", HttpStatus.OK);
	}
	@GetMapping("/getUserByEmail/{email}")
	public ResponseEntity<RegistrationDTO> getRegistrationByEmail(@PathVariable String email) {
		return new ResponseEntity<RegistrationDTO>(registrationService.findByEmail(email), HttpStatus.OK);
	}
	
	@GetMapping("/getUserByMobile/{mobileNumber}")
	public ResponseEntity<RegistrationDTO> getRegistrationBymobileNumber(@PathVariable String mobileNumber)  {
		return new ResponseEntity<RegistrationDTO>(registrationService.findBymobileNumber(mobileNumber), HttpStatus.OK);
	}
	
	@GetMapping("/getUserByPassword/{password}")
	public ResponseEntity<RegistrationDTO> getRegistrationByPassword(@PathVariable String password) {
		return new ResponseEntity<RegistrationDTO>(registrationService.findBypassword(password), HttpStatus.OK);
	}
	
	@PutMapping("/updateUser/{id}")
	public ResponseEntity<RegistrationDTO> updateUser(@RequestBody RegistrationDTO dto, @PathVariable Integer id){
		return new ResponseEntity<RegistrationDTO>(registrationService.updateUser(dto, id),HttpStatus.OK);
	}
	@PutMapping("/updatePrime/{id}")
	public ResponseEntity<RegistrationDTO> updatePrimeUser(@PathVariable Integer id){
		return new ResponseEntity<RegistrationDTO>(registrationService.updatePrime(id),HttpStatus.OK); 
	}
	
	
	
	
	

	
}
