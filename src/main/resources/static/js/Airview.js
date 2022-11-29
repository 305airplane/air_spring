

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
                    "<td align='center'>" + data.data[i].plan_arrival_time + "</td>" +
                    "<td align='center'>" + data.data[i].arrival_time + "</td>" +
                    "<td align='center'>" + data.data[i].terminal + "</td>" +
                    "<td align='center'>" + data.data[i].check_in_counters + "</td>" +
                    "<td>\n" +
                    "<a href=\"#\">修改</a>\n" +
                    "<a href=\"#\">删除</a>\n" +
                    "</td>"+
                "</tr>";
            }
            console.log(str)
            $(".table").html(str);
        }
    });
}