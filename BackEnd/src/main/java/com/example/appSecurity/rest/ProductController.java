package com.example.appSecurity.rest;


import com.example.appSecurity.dao.ProductRepository;
import com.example.appSecurity.entity.Product;
import com.example.appSecurity.modal.ProductRequest;
import com.example.appSecurity.modal.ProductResponse;
import com.example.appSecurity.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:3000/")
public class ProductController {

    @Autowired
    public ProductService productService;
    @Autowired
    ProductRepository productRepository;

@GetMapping("/allProducts")
    public ProductResponse<List<Product>>findAll(){
    List<Product> allproducts= productService.findAllProducts();
    return new ProductResponse<>(allproducts.size(),allproducts);
}

@PostMapping("/getProducts")
    public Page<Product> findProduct(@RequestBody ProductRequest productRequest){

    Page<Product> products=productService.findAllData(productRequest);

    return products;

}

}
