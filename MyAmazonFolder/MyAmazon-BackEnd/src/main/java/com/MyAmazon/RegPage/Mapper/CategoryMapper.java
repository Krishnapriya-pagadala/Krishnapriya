package com.MyAmazon.RegPage.Mapper;

import org.springframework.stereotype.Component;

import com.MyAmazon.RegPage.DTO.CategoryDTO;
import com.MyAmazon.RegPage.RegistrationPageEntity.CategoriesEntity;

@Component
public class CategoryMapper {
	public CategoriesEntity toCategoriesEntity(CategoryDTO dto) {
		CategoriesEntity categoriesEntity= new CategoriesEntity();
	
		categoriesEntity.setCategoryName(dto.getCategoryName());
		return categoriesEntity;
		
	}
	public CategoryDTO toCategoryDTO(CategoriesEntity entity) {
		CategoryDTO categoryDTO=new CategoryDTO();
		categoryDTO.setId(entity.getCategory_id());
		categoryDTO.setCategoryName(entity.getCategoryName());
		
		
		return categoryDTO;
	
	}
	

}
