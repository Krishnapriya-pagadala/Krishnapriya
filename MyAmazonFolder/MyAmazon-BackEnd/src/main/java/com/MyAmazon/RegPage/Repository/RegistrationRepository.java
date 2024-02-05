package com.MyAmazon.RegPage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;

@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationPage,Integer>{

//	RegistrationPage findByEmail(String email);

	RegistrationPage findBymobileNumber(String mobileNumber);

	RegistrationPage findByPassword(String password);
	
	@Query(value = "select * from RegistrationPage where email = :email", nativeQuery = true)
	RegistrationPage findByEmail(String email);
	
	//RegistrationPage findByUserId(Integer id);
	

}
