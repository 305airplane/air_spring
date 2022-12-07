package com.example.airplan_demo.servicelmpl;

import com.example.airplan_demo.bean.AirBean;
import com.example.airplan_demo.mapper.AirMapper;
import com.example.airplan_demo.service.AirService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class AirServiceImpl implements AirService {
    @Resource
    private AirMapper airMapper;

    @Override
    public List<HashMap<String,String>> getAll(){return airMapper.getAll();}

    @Override //按照航班号查找数据
    public AirBean select(String fight_no) {
        return airMapper.select(fight_no);
    }

    @Override //按照时间查找数据
    public List<AirBean> selectlisttime(Date date) {
        return airMapper.selectlisttime(date);
    }

    @Override //按照地点查找数据
    public List<AirBean> selectpart(String start_place,String end_place) {
        return airMapper.selectlistpart(start_place,end_place);
    }

    @Override
    public boolean save(AirBean airBean) {
        return airMapper.save(airBean)>0;
    }


    @Override
    public boolean updata(AirBean airBean) {

        return airMapper.updata(airBean)>0;
    }

    @Override
    public boolean saveorUpdata(AirBean airBean) {
        return airMapper.saveorUpdata(airBean) > 0;
    }

    @Override
    public boolean delete(String fight_no) {
        return airMapper.delete(fight_no)>0;
    }
}
