package com.MyAmazon.RegPage.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.ProductsEntity;
@Repository
public interface ProductRepository extends JpaRepository<ProductsEntity, Integer>{
	@Query(value = "select * from product_table where category_id=?1",nativeQuery = true)
	List<ProductsEntity> findByCategoryId(@Param("categoryId") Integer categoryId);
	
//	@Query(value="select * from product_table where product_name like '%%'",nativeQuery = true)
	List<ProductsEntity> findByProductNameContaining(  String productName);
//	@Query(value = "select * from product_table where ")
//	ProductsEntity findByProduct_id(Integer productId);
}
