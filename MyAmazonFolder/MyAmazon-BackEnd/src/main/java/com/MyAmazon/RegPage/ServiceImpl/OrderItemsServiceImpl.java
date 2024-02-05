package com.MyAmazon.RegPage.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderItemsEntity;
import com.MyAmazon.RegPage.Repository.OrderItemsRepository;
import com.MyAmazon.RegPage.Service.OrderItemsService;

@Service
public class OrderItemsServiceImpl implements OrderItemsService{
	
	@Autowired
	public OrderItemsRepository orderItemsRepository;

	@Override
	public OrderItemsEntity svaeOrderItems(OrderItemsEntity saveItems) {
	
		return null;
	}

	@Override
	public List<OrderItemsEntity> getOrderItems(Integer orderId) {
	
		return null;
	}
	

}
