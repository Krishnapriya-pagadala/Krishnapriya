package com.MyAmazon.RegPage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.RegistrationPage;
import com.MyAmazon.RegPage.RegistrationPageEntity.WishlistEntity;

@Repository
public interface WishlistRepository extends JpaRepository<WishlistEntity, Integer>{

	@Query(value = "select * from wishlist where id=?1 and product_id=?2",nativeQuery = true)
	WishlistEntity findByUserandProducts(@Param("id") Integer id, @Param( "product_id")Integer productId);

	

	List<WishlistEntity> findByRegistrationPage(RegistrationPage userDetails);

}
