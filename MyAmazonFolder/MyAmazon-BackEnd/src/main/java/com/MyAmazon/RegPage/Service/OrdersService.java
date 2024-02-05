package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderEntity;

public interface OrdersService {
	
	OrderEntity savOrders(OrderEntity orders);
	
	List<OrderEntity> getOrdersByUser(Integer id);
	
	
	

}
