

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
function go(){
    setInterval(display, 1000);
}
function display(){
    $.ajax({
        method:"post",
        url:"/Airview/selectall",
        data:{},
        dataType:"JSON",
        success: function (data) {
            console.log(data.data)
            if(data.code=="20041"){
                var rows=[]
                $.each(data.data,function (i,item){
                    rows.push('<tr><td>'+item.fight_no+'</td><td>'+item.fight_firm+
                        '</td><td>'+item.air_model+'</td><td>'+
                        item.start_place+'</td><td>'+item.end_place+'</td><td>'+
                        item.Stopover_place+'</td><td>'+item.plan_departure_time+'</td><td>'+
                        item.departure_time+'</td><td>'+item.plan_arrival_time+'</td><td>'+
                        item.arrival_time+'</td><td>'+item.terminal+'</td><td>'+
                         item.check_in_counters+'</td><td>'+item.航班状态+'</td><td>'
                        +item.出港状态+'</td><td>'
                        +item.进港状态+'</td>'
                    )
                        // +'<button class="btn_update"data-id='+item.id+'>修改</button>' +'</td><td>'+
                        // '<button class="btn_delete"data-id='+item.id+'>删除</button></td></tr>')
                })
                $("#tb").empty().append(rows.join(''))
            }
        }
    });
}
