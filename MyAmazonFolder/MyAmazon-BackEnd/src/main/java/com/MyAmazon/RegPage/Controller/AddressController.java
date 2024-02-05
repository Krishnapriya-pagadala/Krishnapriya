package com.MyAmazon.RegPage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyAmazon.RegPage.DTO.AddressDTO;
import com.MyAmazon.RegPage.Service.AddressService;



@RestController
@RequestMapping("/address")
@CrossOrigin("*")
public class AddressController {
	@Autowired
 private AddressService addressService;
	@PostMapping("/save/{id}")
	public ResponseEntity <AddressDTO> saveAddress(@PathVariable Integer id,@RequestBody AddressDTO login ){
		
		return new ResponseEntity <AddressDTO>(addressService.saveAddress(id, login),HttpStatus.CREATED);
		
	}
	@PutMapping("/update/{addressId}")
public ResponseEntity <AddressDTO> updateAddress(@RequestBody AddressDTO update, @PathVariable Integer addressId ){
		
		return new ResponseEntity <AddressDTO>(addressService.updateAddress(update, addressId),HttpStatus.OK);

	}
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<List<AddressDTO>> getAddressByUserId(@PathVariable Integer id){
		//return new ResponseEntity<AddressDTO>(addressService.getAddressById(id),HttpStatus.OK);
		return new ResponseEntity<List<AddressDTO>>(addressService.getAllAdress(id),HttpStatus.OK);
	}
	@DeleteMapping("/DeleteUser/{id}")
	public ResponseEntity<String> deleteUserByIdEntity(@PathVariable Integer id) {
		addressService.deleteAddress(id);
		return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
	}
	
	@GetMapping("/getAddress/{addressId}")
	public ResponseEntity<AddressDTO> getAddressByAdressId(@PathVariable Integer addressId){
		
		return new ResponseEntity<AddressDTO>(addressService.getAddressById(addressId),HttpStatus.OK);
		
	}

}
