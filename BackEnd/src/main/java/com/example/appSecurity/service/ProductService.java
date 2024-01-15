package com.example.appSecurity.service;

import com.example.appSecurity.dao.ProductRepository;
import com.example.appSecurity.entity.Product;
import com.example.appSecurity.modal.ProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService{
    String save(Product product);

    List<Product> findAllProducts();

    Page<Product> findAllData(ProductRequest productRequest);

}
