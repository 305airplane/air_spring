package com.example.airplan_demo;

import com.example.airplan_demo.bean.AirBean;
import com.example.airplan_demo.bean.UserBean;
import com.example.airplan_demo.service.AirService;
import com.example.airplan_demo.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
class SpringbootdemoApplicationTests {
    @Resource
    AirService airService;
    @Test
    void contextLoads(){
        List<AirBean> airBeans=airService.getAll();
        System.out.println(airBeans);
    }
}
