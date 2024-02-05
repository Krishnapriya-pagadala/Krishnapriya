package com.MyAmazon.RegPage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderEntity;

@Repository
public interface OrdersRepository extends JpaRepository<OrderEntity, Integer>{

}
