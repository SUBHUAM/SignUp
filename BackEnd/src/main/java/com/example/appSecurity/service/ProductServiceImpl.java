package com.example.appSecurity.service;

import com.example.appSecurity.dao.ProductRepository;
import com.example.appSecurity.entity.Product;
import com.example.appSecurity.modal.ProductRequest;
import com.example.appSecurity.modal.ProductResponse;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    public ProductRepository productRepository;

//    @PostConstruct
//    public void initDB() {
//        List<Product> products = IntStream.rangeClosed(1, 200)
//                .mapToObj(i -> new Product("product" + i, new Random().nextInt(100), new Random().nextInt(50000)))
//                .collect(Collectors.toList());
//        productRepository.saveAll(products);
//    }
    @Override
    public String save(Product product) {
        productRepository.save(product);
        return "Product saved";
    }

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }


    @Override
    public Page<Product> findAllData(ProductRequest productRequest) {
        PageRequest pageRequest =
                PageRequest.of(
                        productRequest.getPageNo(),
                        productRequest.getPageSize(),
                        Sort.Direction.valueOf(productRequest.getSortDir().toUpperCase()),
                        productRequest.getSortBy());

        return productRepository.findAll(pageRequest);
    }


}
