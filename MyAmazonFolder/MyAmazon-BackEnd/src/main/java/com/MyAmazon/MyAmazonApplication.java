package com.MyAmazon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages ="com.MyAmazon.*")
public class MyAmazonApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyAmazonApplication.class, args);
	}

}
