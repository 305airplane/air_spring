package com.example.airplan_demo.mapper;

import com.example.airplan_demo.bean.UserBean;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    UserBean getInfo(String name,String password);


}
