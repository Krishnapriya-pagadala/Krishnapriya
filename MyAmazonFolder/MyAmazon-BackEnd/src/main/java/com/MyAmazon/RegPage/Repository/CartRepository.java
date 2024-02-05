package com.MyAmazon.RegPage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.CartEntity;
import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;


@Repository
public interface CartRepository extends JpaRepository<CartEntity, Integer>{
	@Query(value = "select * from cart_item where id=?1 and product_id=?2",nativeQuery = true)
	public CartEntity findByUserAndProduct(@Param("id") Integer  user_id,@Param("product_id") Integer product_id);


	public List<CartEntity> findByRegistrationPageEntity(RegistrationPage userDetails);

}
