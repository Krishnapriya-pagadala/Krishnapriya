package com.MyAmazon.RegPage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyAmazon.RegPage.RegistrationPageEntity.AddressEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;

public interface AddressRepository extends JpaRepository<AddressEntity, Integer>{

	List<AddressEntity> findByRegistrationPage(RegistrationPage userDetails);

}
