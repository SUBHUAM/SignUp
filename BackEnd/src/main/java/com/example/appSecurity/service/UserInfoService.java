package com.example.appSecurity.service;

import com.example.appSecurity.dao.UserInfoRepository;
import com.example.appSecurity.entity.Employee;
import com.example.appSecurity.entity.UserInfo;

import java.util.List;
import java.util.Optional;

public interface UserInfoService {
    Optional<UserInfo> findByUserName(String username);
    UserInfo save(UserInfo user);
    List<UserInfo> findAll();
}
