

function test1(){
    $.ajax({
        method:"post",
        url:"/Airview/selectbyno",
        data:{"fight_no":$("#fight_no").val()},
        dataType:"JSON",
        success:function (data) {
            if (data.code == 20041) {
                var str = "<tr>\n" +
                    "<td>航班号</td>\n" +
                    "<td>航空公司</td>\n" +
                    "<td>飞机型号</td>\n" +
                    "<td>起飞地点</td>\n" +
                    "<td>到达地点</td>\n" +
                    "<td>经停</td>\n" +
                    " <td>计划起飞时间</td>\n" +
                    " <td>实际起飞时间</td>\n" +
                    "<td>计划到达时间</td>\n" +
                    "<td>实际到达时间</td>\n" +
                    " <td>航站楼</td>\n" +
                    "<td>值机柜台</td>\n" +
                    "</tr>"
                // var str="";
                str += "<tr>" +
                    "<td align='center'>" + data.data.fight_no + "</td>" +
                    "<td align='center'>" + data.data.fight_firm + "</td>" +
                    "<td align='center'>" + data.data.air_model + "</td>" +
                    "<td align='center'>" + data.data.start_place + "</td>" +
                    "<td align='center'>" + data.data.end_place + "</td>" +
                    "<td align='center'>" + data.data.stopover_place + "</td>" +
                    "<td align='center'>" + data.data.plan_departure_time + "</td>" +
                    "<td align='center'>" + data.data.departure_time + "</td>" +
                    "<td align='center'>" + data.data.plan_arrival_time + "</td>" +
                    "<td align='center'>" + data.data.arrival_time + "</td>" +
                    "<td align='center'>" + data.data.terminal + "</td>" +
                    "<td align='center'>" + data.data.check_in_counters + "</td>" +
                    "</tr>";
                $(".table").html(str);
            }
            else(alert("查询失败"))
        }
    });
}
function test3(){
    console.log($("#start_place").val())
    $.ajax({
        method: "post",
        url: "/Airview/selectbypart",
        data: {"start_place":$("#start_place").val(),
            "end_place":$("#end_place").val()},
        dataType: "JSON",
        success: function (data) {
            if (data.code == 20041) {
                var str = "<tr>\n" +
                    "<td>航班号</td>\n" +
                    "<td>航空公司</td>\n" +
                    "<td>飞机型号</td>\n" +
                    "<td>起飞地点</td>\n" +
                    "<td>到达地点</td>\n" +
                    "<td>经停</td>\n" +
                    " <td>计划起飞时间</td>\n" +
                    " <td>实际起飞时间</td>\n" +
                    "<td>计划到达时间</td>\n" +
                    "<td>实际到达时间</td>\n" +
                    " <td>航站楼</td>\n" +
                    "<td>值机柜台</td>\n" +
                    // "<td>操作</td>\n" +
                    "</tr>"
                // var str="";
                for (var i = 0; i < data.data.length; i++) {
                    str += "<tr>" +
                        "<td align='center'>" + data.data[i].fight_no + "</td>" +
                        "<td align='center'>" + data.data[i].fight_firm + "</td>" +
                        "<td align='center'>" + data.data[i].air_model + "</td>" +
                        "<td align='center'>" + data.data[i].start_place + "</td>" +
                        "<td align='center'>" + data.data[i].end_place + "</td>" +
                        "<td align='center'>" + data.data[i].Stopover_place + "</td>" +
                        "<td align='center'>" + data.data[i].plan_departure_time + "</td>" +
                        "<td align='center'>" + data.data[i].departure_time + "</td>" +
                        "<td align='center'>" + data.data[i].plan_arrival_time + "</td>" +
                        "<td align='center'>" + data.data[i].arrival_time + "</td>" +
                        "<td align='center'>" + data.data[i].terminal + "</td>" +
                        "<td align='center'>" + data.data[i].check_in_counters + "</td>" +
                        // "<td>\n" +
                        // "<a href=\"#\">修改</a>\n" +
                        // "<a href=\"#\">删除</a>\n" +
                        // "</td>"+
                        "</tr>";
                }
                $(".table").html(str);
            }
            else{alert("查询失败")}
        }
    });
}

// function test2(){
//     let DateUtil = {
//         //日期格式部分
//         yyyy_MM_dd_HH_mm_ss: "yyyy-MM-dd HH:mm:ss",
//         yyyy_MM_dd: "yyyy-MM-dd",
//         yyyy_MM_dd_1: "yyyy/MM/dd",
//         yyyyMMdd: "yyyyMMdd",
//         HH_mm_ss: "HH:mm:ss",
//         format: function (date, pattern) {
//             let yy = date.getFullYear();      //年
//             let mm = date.getMonth() + 1;     //月
//             let dd = date.getDate();          //日
//             let hh = date.getHours();         //时
//             let ii = date.getMinutes();       //分
//             let ss = date.getSeconds();       //秒
//
//             let clock = yy + "-";
//             if (mm < 10) clock += "0";
//             clock += mm + "-";
//             if (dd < 10) clock += "0";
//             clock += dd + " ";
//             if (hh < 10) clock += "0";
//             clock += hh + ":";
//             if (ii < 10) clock += '0';
//             clock += ii + ":";
//             if (ss < 10) clock += '0';
//             clock += ss;
//             if (DateUtil.isNull(pattern) || pattern == DateUtil.yyyy_MM_dd_HH_mm_ss) {
//                 return clock;
//             } else if (pattern == DateUtil.yyyy_MM_dd) {
//                 return clock.substring(0, 10);
//             } else if (pattern == DateUtil.HH_mm_ss) {
//                 return clock.substring(11);
//             } else if (pattern == DateUtil.yyyy_MM_dd_1) {
//                 return clock.substring(0, 10).replace(/-/g, '/');
//             } else if (pattern == DateUtil.yyyyMMdd) {
//                 return clock.substring(0, 10).replace(/-/g, '');
//             } else {
//                 return clock;
//             }
//         }
//     };
//     $.ajax({
//         method:"post",
//         url:"/Airview/selectbydate",
//         data:{"plan_departure_time": DateUtil.format(new Date($("#selectdate").val))},
//         dataType:"JSON",
//         success:function (data) {
//             var str= "<tr>\n" +
//                 "<td>航班号</td>\n" +
//                 "<td>航空公司</td>\n" +
//                 "<td>飞机型号</td>\n" +
//                 "<td>起飞地点</td>\n" +
//                 "<td>到达地点</td>\n" +
//                 "<td>经停</td>\n" +
//                 " <td>计划起飞时间</td>\n" +
//                 " <td>实际起飞时间</td>\n" +
//                 "<td>计划到达时间</td>\n" +
//                 "<td>实际到达时间</td>\n" +
//                 " <td>航站楼</td>\n" +
//                 "<td>值机柜台</td>\n" +
//                 "<td>操作</td>\n" +
//                 "</tr>"
//             // var str="";
//             for (var i=0;i<data.data.length;i++) {
//                 str += "<tr>" +
//                     "<td align='center'>" + data.data[i].fight_no + "</td>" +
//                     "<td align='center'>" + data.data[i].fight_firm + "</td>" +
//                     "<td align='center'>" + data.data[i].air_model + "</td>" +
//                     "<td align='center'>" + data.data[i].start_place + "</td>" +
//                     "<td align='center'>" + data.data[i].end_place + "</td>" +
//                     "<td align='center'>" + data.data[i].Stopover_place + "</td>" +
//                     "<td align='center'>" + data.data[i].plan_departure_time + "</td>" +
//                     "<td align='center'>" + data.data[i].departure_time + "</td>" +
//                     "<td align='center'>" + data.data[i].plan_arrival_time + "</td>" +
//                     "<td align='center'>" + data.data[i].arrival_time + "</td>" +
//                     "<td align='center'>" + data.data[i].terminal + "</td>" +
//                     "<td align='center'>" + data.data[i].check_in_counters + "</td>" +
//                     "<td>\n" +
//                     "<a href=\"#\">修改</a>\n" +
//                     "<a href=\"#\">删除</a>\n" +
//                     "</td>"+
//                     "</tr>";
//             }
//             $(".table").html(str);
//         }
//     });
// }

function display(){
    $.ajax({
        method:"post",
        url:"/Airview/selectall",
        data:{},
        dataType:"JSON",
        success:function (data) {
            var str= "<tr>\n" +
                "<td>航班号</td>\n" +
                "<td>航空公司</td>\n" +
                "<td>飞机型号</td>\n" +
                "<td>起飞地点</td>\n" +
                "<td>到达地点</td>\n" +
                "<td>经停</td>\n" +
                " <td>计划起飞时间</td>\n" +
                " <td>实际起飞时间</td>\n" +
                "<td>计划到达时间</td>\n" +
                "<td>实际到达时间</td>\n" +
                " <td>航站楼</td>\n" +
                "<td>值机柜台</td>\n" +
                "<td>操作</td>\n" +
                "</tr>"
            // var str="";
            for (var i=0;i<data.data.length;i++) {
                str += "<tr>" +
                    "<td align='center'>" + data.data[i].fight_no + "</td>" +
                    "<td align='center'>" + data.data[i].fight_firm + "</td>" +
                    "<td align='center'>" + data.data[i].air_model + "</td>" +
                    "<td align='center'>" + data.data[i].start_place + "</td>" +
                    "<td align='center'>" + data.data[i].end_place + "</td>" +
                    "<td align='center'>" + data.data[i].Stopover_place + "</td>" +
                    "<td align='center'>" + data.data[i].plan_departure_time + "</td>" +
                    "<td align='center'>" + data.data[i].departure_time + "</td>" +
                    "<td align='center'>" + data.data[i].plan_arrival_time + "</td>" +
                    "<td align='center'>" + data.data[i].arrival_time + "</td>" +
                    "<td align='center'>" + data.data[i].terminal + "</td>" +
                    "<td align='center'>" + data.data[i].check_in_counters + "</td>" +
                    // "<td>\n" +
                    // "<a href=\"#\">修改</a>\n" +
                    // "<a href=\"#\">删除</a>\n" +
                    // "</td>"+
                "</tr>";
            }
            $(".table").html(str);
        }
    });
}
