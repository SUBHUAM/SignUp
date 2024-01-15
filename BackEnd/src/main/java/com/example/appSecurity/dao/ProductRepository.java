package com.example.appSecurity.dao;

import com.example.appSecurity.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductRepository extends JpaRepository<Product,Integer>, PagingAndSortingRepository<Product,Integer> {

}
