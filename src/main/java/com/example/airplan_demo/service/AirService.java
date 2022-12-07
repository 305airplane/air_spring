package com.example.airplan_demo.service;

import com.example.airplan_demo.bean.AirBean;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

public interface AirService {

    //查询所有
    public List<HashMap<String,String>> getAll();

    //按航班号查找
    public AirBean select(String fight_no);

    //按照出发时间查找
    public List<AirBean> selectlisttime(Date date);

    //按照出地点查找
    public List<AirBean> selectpart(String start_place,String end_place);

    //插入数据
    public boolean save(AirBean airBean);

    //更新数据
    public boolean updata(AirBean airBean);

    //保存或更新数据
    public boolean saveorUpdata(AirBean airBean);

    //删除数据
    public boolean delete(String fight_no);
}
