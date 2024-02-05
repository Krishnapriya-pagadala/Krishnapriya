package com.MyAmazon.RegPage.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderEntity;
import com.MyAmazon.RegPage.Repository.OrdersRepository;
import com.MyAmazon.RegPage.Service.OrdersService;

@Service
public class OrdersSerivceImpl implements OrdersService{
	
	@Autowired
	public OrdersRepository ordersRepository;
	
	

	@Override
	public OrderEntity savOrders(OrderEntity orders) {
		
		
	
		return null;
	}

	@Override
	public List<OrderEntity> getOrdersByUser(Integer id) {
	
		return null;
	}

}
