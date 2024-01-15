package com.example.appSecurity.modal;

import lombok.Data;

@Data
public class ProductRequest {
    private Integer pageNo;
    private Integer pageSize;
    private String sortBy;
    private String sortDir;
}
