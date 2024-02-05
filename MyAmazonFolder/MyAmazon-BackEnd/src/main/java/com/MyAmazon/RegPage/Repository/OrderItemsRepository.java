package com.MyAmazon.RegPage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderItemsEntity;

@Repository
public interface OrderItemsRepository extends JpaRepository<OrderItemsEntity, Integer> {

}
