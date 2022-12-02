package com.example.airplan_demo.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


public class AirBean {
    private String fight_no;
    private String fight_firm;
    private String air_model;
    private String start_place;
    private String end_place;
    private String Stopover_place;
//    @DateTimeFormat(pattern = "yyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+8")
    private Date plan_departure_time;
//    @DateTimeFormat(pattern = "yyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+8")
    private Date departure_time;
//    @DateTimeFormat(pattern = "yyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+8")
    private Date plan_arrival_time;
//    @DateTimeFormat(pattern = "yyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+8")
    private Date arrival_time;
    private String terminal;
    private String check_in_counters;

    @Override
    public String toString() {
        return "AirBean{" +
                "fight_no='" + fight_no + '\'' +
                ", fight_firm='" + fight_firm + '\'' +
                ", air_model='" + air_model + '\'' +
                ", start_place='" + start_place + '\'' +
                ", end_place='" + end_place + '\'' +
                ", Stopover_place='" + Stopover_place + '\'' +
                ", plan_departure_time=" + plan_departure_time +
                ", departure_time=" + departure_time +
                ", plan_arrival_time=" + plan_arrival_time +
                ", arrival_time=" + arrival_time +
                ", terminal='" + terminal + '\'' +
                ", check_in_counters='" + check_in_counters + '\'' +
                '}';
    }

    public void setFight_no(String fight_no) {
        this.fight_no = fight_no;
    }

    public void setFight_firm(String fight_firm) {
        this.fight_firm = fight_firm;
    }

    public void setAir_model(String air_model) {
        this.air_model = air_model;
    }

    public void setStart_place(String start_place) {
        this.start_place = start_place;
    }

    public void setEnd_place(String end_place) {
        this.end_place = end_place;
    }

    public void setStopover_place(String stopover_place) {
        Stopover_place = stopover_place;
    }

    public void setPlan_departure_time(Date plan_departure_time) {
        this.plan_departure_time = plan_departure_time;
    }

    public void setDeparture_time(Date departure_time) {
        this.departure_time = departure_time;
    }

    public void setPlan_arrival_time(Date plan_arrival_time) {
        this.plan_arrival_time = plan_arrival_time;
    }

    public void setArrival_time(Date arrival_time) {
        this.arrival_time = arrival_time;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }

    public void setCheck_in_counters(String check_in_counters) {
        this.check_in_counters = check_in_counters;
    }

    public String getFight_no() {
        return fight_no;
    }

    public String getFight_firm() {
        return fight_firm;
    }

    public String getAir_model() {
        return air_model;
    }

    public String getStart_place() {
        return start_place;
    }

    public String getEnd_place() {
        return end_place;
    }

    public String getStopover_place() {
        return Stopover_place;
    }

    public Date getPlan_departure_time() {
        return plan_departure_time;
    }

    public Date getDeparture_time() {
        return departure_time;
    }

    public Date getPlan_arrival_time() {
        return plan_arrival_time;
    }

    public Date getArrival_time() {
        return arrival_time;
    }

    public String getTerminal() {
        return terminal;
    }

    public String getCheck_in_counters() {
        return check_in_counters;
    }
}
