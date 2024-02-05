package com.MyAmazon.RegPage.Service;

import java.util.List;

import com.MyAmazon.RegPage.RegistrationPageEntity.OrderItemsEntity;

public interface OrderItemsService {
	
	OrderItemsEntity svaeOrderItems(OrderItemsEntity saveItems);

	List<OrderItemsEntity> getOrderItems(Integer orderId);
	

}
