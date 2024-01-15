package com.example.appSecurity.rest;


import com.example.appSecurity.entity.UserInfo;
import com.example.appSecurity.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000/")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/all")
    public List<UserInfo> findAll(){
        return userInfoService.findAll();
    }
    @PostMapping("/add")
    public UserInfo save(@RequestBody UserInfo userInfo){
        userInfo.setId(0);
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        return userInfoService.save(userInfo);
    }


    @GetMapping("/findByUserName/{username}")
    public Optional<UserInfo> findByUserName(@PathVariable String username){
        Optional<UserInfo> user=userInfoService.findByUserName(username);
        if(user.isEmpty()){
            throw new RuntimeException("User not Found !");
        }
        return user;
    }

}
