package com.example.appSecurity.service;

import com.example.appSecurity.dao.UserInfoRepository;
import com.example.appSecurity.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserInfoServiceImpl implements UserInfoService{

    private UserInfoRepository userInfoRepository;

    @Autowired
   public UserInfoServiceImpl (UserInfoRepository userInfoRepository){
        this.userInfoRepository=userInfoRepository;
    }

    @Override
    public Optional<UserInfo> findByUserName(String username) {
        Optional<UserInfo> info=userInfoRepository.findByUserName(username);
        return info;
    }

    @Override
    public UserInfo save(UserInfo user) {
        return userInfoRepository.save(user);
    }
    @Override
    public List<UserInfo> findAll() {
        List<UserInfo> allUsers=userInfoRepository.findAll();
        return allUsers;
    }
}
