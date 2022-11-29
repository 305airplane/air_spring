package com.example.airplan_demo.controller;

import com.example.airplan_demo.bean.AirBean;
import com.example.airplan_demo.service.AirService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/Airview")
public class AirController {
    //将Service注入Web层
    @Resource
    AirService airService;
//    //映射到web页面loginView.html
//    @RequestMapping("/Airview")
//    public String show(){return"Airview";}

//    @PostMapping("/airsave")
//    public boolean save(@RequestBody AirBean airbean){return airService.save(airbean)};
    //映射到service层的loginView.html

     //按照航班号查找
    @RequestMapping ("/selectbyno")
    @ResponseBody
    public Result select(String fight_no){
        AirBean airBean=airService.select(fight_no);
        Integer code=airBean!=null ? Code.GET_OK:Code.GET_ERR;
        String msg=airBean!=null ?"":"查询失败，请重试";
        return new Result(code,airBean,msg) ;
    }

    //查找所有数据
    @RequestMapping("/selectall")
    @ResponseBody
    public Result loginMethod(){
        List<AirBean> airBeans= airService.getAll();
        Integer code=airBeans!=null ? Code.GET_OK:Code.GET_ERR;
        String msg=airBeans!=null ?"":"查询失败，请重试";
        return new Result(code,airBeans,msg) ;
    }

    @RequestMapping("/save")
    @ResponseBody
    public  Result airsave(AirBean airBean){
        boolean flag=airService.save(airBean);
        return new Result(flag ? Code.SAVE_OK:Code.SAVE_ERR,flag);
    }

    @RequestMapping("/delete")
    @ResponseBody
    public  Result delete(String fight_no){
        boolean flag=airService.delete(fight_no);

        return new Result(flag ? Code.DELETE_OK:Code.DELETE_ERR,flag);
    }

}
