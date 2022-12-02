package com.example.airplan_demo.mapper;

import com.example.airplan_demo.bean.AirBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface AirMapper {

    //查询所有
    List<AirBean> getAll();

    AirBean select(String fight_no);

    List<AirBean> selectlisttime(Date date);

    List<AirBean> selectlistpart(String start_place,String end_place);

    //插入数据
    int save(AirBean airBean);

    //更新数据
    int updata(AirBean airBean);

    //保存或更新数据
    int saveorUpdata(AirBean airBean);

    //删除数据
    int delete(String fight_no);





}
