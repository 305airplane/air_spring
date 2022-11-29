package com.example.airplan_demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.airplan_demo.mapper")
public class AirplanDemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(AirplanDemoApplication.class, args);
    }

}
