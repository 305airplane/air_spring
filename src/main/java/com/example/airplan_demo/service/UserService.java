package com.example.airplan_demo.service;

import com.example.airplan_demo.bean.UserBean;

public interface UserService {
    UserBean logIn(String name,String password);
}
