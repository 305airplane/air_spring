package com.example.airplan_demo.servicelmpl;

import com.example.airplan_demo.bean.UserBean;
import com.example.airplan_demo.mapper.UserMapper;
import com.example.airplan_demo.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServicelmpl implements UserService {
    //将dao注入Service层
    @Resource
    private UserMapper userMapper;
    public UserBean logIn(String name, String password){
        return userMapper.getInfo(name,password);
    }
}
