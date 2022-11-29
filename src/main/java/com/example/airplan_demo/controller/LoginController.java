package com.example.airplan_demo.controller;

import com.example.airplan_demo.bean.UserBean;
import com.example.airplan_demo.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;

@Controller
public class LoginController {
    //将Service注入Web层
    @Resource
    UserService userService;
    //映射到web页面loginView.html
    @RequestMapping("/loginView")
    public String show(){return"loginView";}

    //映射到service层的loginView.html
    @RequestMapping(value="/logIn",method = RequestMethod.POST)
    public String loginMethod(String name,String password){
        UserBean userBean=userService.logIn(name,password);
        if(userBean!=null)
            return "success";
        else
            return "error";
    }
}
