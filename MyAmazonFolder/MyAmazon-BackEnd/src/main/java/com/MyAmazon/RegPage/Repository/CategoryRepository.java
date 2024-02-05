package com.MyAmazon.RegPage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.CategoriesEntity;
@Repository
public interface CategoryRepository extends JpaRepository<CategoriesEntity, Integer> {
@Query(nativeQuery = true,value = "select * from category_table where category_name= :category_name")
public	CategoriesEntity findByName(@Param("category_name") String category_name);

}
