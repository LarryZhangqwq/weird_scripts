<html xmlns:layout="http://www.ultraq.net.nz/web/thymeleaf/layout" layout:decorate="~{layout/layout}"><head>
    <title>健康驛站房間線上預約系統</title>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
    <meta name="apple-mobile-web-app-capable" content="no">
    <meta content="telephone=no" name="format-detection">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <link rel="stylesheet" href="/css/m_n.min.css?202101041">
<!--    <link href="/css/marster.css?v=1" rel="stylesheet" type="text/css">-->
<link href="https://hk.sz.gov.cn/js/dict/need/layer.css?2.0" type="text/css" rel="styleSheet" id="layermcss"></head>
<body>
<div class="layout_body" layout:fragment="content">
    <section class="topBar"><a href="/userPage/userCenter" class="back">
        <i class="arrow arrow-l"></i></a>
        <span>健康驛站房間線上預約</span></section>
    <div class="flexbox yuyuehead">
        <div>日期</div>
        <div class="flex1 ta_c"><span>可預約數</span>
            ｜<span>總預約數</span></div>
        <div>操作</div>
    </div>

    <div class="tzlist tongguanlist yuyuelist">
        <div id="divSzArea">
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>12</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>862</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>13</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>809</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>14</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>802</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>15</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>804</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>16</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>810</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>17</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>800</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em>18</em>日<p>2022-02</p></div>
                <div class="flex1 ta_c">
                    
                    <span class="gray mr15"><i>可</i><em>無</em></span>
                    <span class="gray"><i>總</i><em>800</em></span>
                    
                </div>
                <p>
                    
                    <button class="gray">預約</button>
                    
                </p>
            </div>
        </section>


    </div>
    </div>
    

    <!--弹出窗-->
    <div id="mSueccss" class="mask" style="display: none;"></div>
    <div id="winSueccss" class="winpop" style="display: none;top: 20%;">
        <section class="winpop-cont" style="padding: 10px 15px;">
            <p class="title">温馨提示</p>
            <p class="c-323 f16" style="height: 190px;overflow: auto;">自2022年1月26日起，由香港入境深圳的普通旅客，入境時需持有粵港兩地政府認可檢測機構出具的生成時間24小時內的核酸檢測陰性結果紙質報告，入境後需接受14天集中隔離醫學觀察和7天居家健康監測，不再實施「7+7+7」隔離醫學觀察和健康監測。</p>
        </section>
        <div class="flexbox btngroup">
            <div class="flex1">
                <button type="button" onclick="closeComfirm()" style="width: 48%;">取消</button>
                <button type="button" onclick="redirectOrder()" style="width: 48%;">確定</button>
            </div>
        </div>
    </div>


    <input type="hidden" id="hidCheckinDate" value="">
    <input type="hidden" id="hidTimespan" value="">
    <input type="hidden" id="hidSign" value="">
    <input type="hidden" id="hidHouseType" value="1">
    <input type="hidden" id="hidDistrict" value="">
</div>


    <script src="/js/dict/reserve.js?20201218"></script>
    <script type="application/javascript">
        var selectCheckInDate = "\u9078\u64C7\u5165\u4F4F\u6642\u9593";
        var selectDateTitle = "\u8ACB\u9078\u64C7\u65E5\u671F";
        var infoMsg = "\u8ACB\u5148\u5B8C\u5584\u500B\u4EBA\u4FE1\u606F\u624D\u80FD\u9810\u8A02\u9152\u5E97";
        var selectDate = [];
        var submitLoading = "\u63D0\u4EA4\u4E2D";
        var submitRemport = "\u7D2F\u8A08\u723D\u7D043\u6B21\u5F8C\u8CEC\u6236\u5C07\u7121\u6CD5\u518D\u9810\u8A02\u9152\u5E97\uFF0C\u78BA\u5B9A\u8981\u9810\u8A02\u55CE\uFF1F";
        var confirmResver = "\u78BA\u5B9A\u8981\u9810\u7D04\u55CE";
        var resverrSuccess = "\u9810\u7D04\u6210\u529F";
        var reveserCount = "\u53EF\u9810\u7D04\u6578";
        var revser = "\u9810\u7D04";

        var total = "\u7E3D";
        var can = "\u53EF";
        var no = "\u7121";
        var detailDay = "\u65E5";

        $(function () {
            //initCalendar();
            getDistrictList();
        });

        function initCalendar() {
            var currentDate = new Date();
            var currentDateStr = currentDate.format("yyyy-MM");
            $("#yearMonth").html(currentDateStr);
            var html = '';
            for (var i = 0; i < 7; i++) {
                var now = new Date();
                now.setDate(currentDate.getDate() + i);
                var day = now.getDate();
                var dateStr = now.format("yyyy-MM-dd");
                var cla = "";
                if (i == 0) {
                    cla = "active";
                    $("#hidCheckinDate").val(dateStr);
                }
                html += '<a href="javascript:;" onclick="selectDate1(this)" class="' + cla + '" data-value="' + dateStr + '">' + paddingZero(day) + '</a>';
            }
            $("#seletime-date").html(html);
        }

        function paddingZero(value) {
            return value < 10 ? "0" + value : value.toString();
        }

        function selectDate1(obj) {
            $(".seletime-date a").removeClass("active");
            $(obj).addClass("active");
            var dateStr = $(obj).data("value");
            $("#hidCheckinDate").val(dateStr);
            var dateArr = dateStr.split('-');
            var currentDateStr = dateArr[0] + "-" + dateArr[1];
            $("#yearMonth").html(currentDateStr);
            getDistrictList();

        }

        //获取区域列表数据
        function getDistrictList() {
            $.ajax({
                type: "post",
                url: rootPath + "districtHousenumLog/getList",
                data: {
                   // checkinDate: $("#hidCheckinDate").val()
                },
                beforeSend: function () {
                    layerHelp.loading();
                },
                success: function (data) {
                    layer.closeAll();
                    if (parseInt(data.status) == 200) {
                        var szHtml = '';
                       // var otherHtml = '';
                        $(data.data).each(function (i, item) {
                            var dateArr=item.date.split('-');
                            var year='';
                            var day='';
                            if(dateArr.length>2){
                               year=dateArr[0]+"-"+dateArr[1];
                               day=dateArr[2];
                            }
                            szHtml += _.template($("#tempList").html())({
                                data: item,
                                year:year,
                                day:day
                            });
                            // if (item.areaType == 1) {
                            //     szHtml += html;
                            // } else if (item.areaType == 3) {
                            //     otherHtml += html;
                            // }
                        });
                        if (szHtml == '') {
                            szHtml = '<div style="text-align: center;margin-top: 10px;">暂无数据</div>';
                        }
                        // if (otherHtml == '') {
                        //     otherHtml = '<div style="text-align: center;margin-top: 10px;">暂无数据</div>';
                        // }
                        $("#divSzArea").html(szHtml);
                       // $("#otherCityArea").html(otherHtml);

                    } else {
                        layerHelp.msg(data.msg);
                    }
                },
                error: function (e) {
                    layer.closeAll();
                },
                complete: function () {

                }
            });
        }

        function showComfirm(obj) {
            var checkinDate=$(obj).attr("data-date");
            var timespan=$(obj).attr("data-timespan");
            var sign=$(obj).attr("data-sign");
            $("#hidCheckinDate").val(checkinDate);
            $("#hidTimespan").val(timespan);
            $("#hidSign").val(sign);
            $("#mSueccss,#winSueccss").show();
        }

        function closeComfirm() {
            $("#mSueccss,#winSueccss").hide();
        }

        function redirectOrder() {
            var checkinDate=  $("#hidCheckinDate").val();
            var timespan=$("#hidTimespan").val();
            var sign= $("#hidSign").val();
            closeComfirm();
            window.location.href = "/passInfo/confirmOrder?checkinDate=" + checkinDate+"&t="+timespan+"&s="+sign;
        }


    </script>

    <script type="text/template" id="tempList">
        <section class="card_info">
            <div class="flexbox">
                <div class="yuyue-time"><em><%=day%></em><%=detailDay%><p><%=year%></p></div>
                <div class="flex1 ta_c">
                    <% if(data.count>0){%>
                    <span class="orange mr15"><i><%=can%></i><em><%=data.count%></em></span>
                    <span class="blue"><i><%=total%></i><em><%=data.total%></em></span>
                    <%}else{%>
                    <span class="gray mr15"><i><%=can%></i><em><%=no%></em></span>
                    <span class="gray"><i><%=total%></i><em><%=data.total%></em></span>
                    <%}%>
                </div>
                <p>
                    <% if(data.count>0){%>
                    <button class="orange" onclick="showComfirm(this)" data-date="<%=data.date%>" data-timespan="<%=data.timespan%>"
                            data-sign="<%=data.sign%>">
                        <%=revser%>
                    </button>
                    <%}else{%>
                    <button class="gray"><%=revser%></button>
                    <%}%>
                </p>
            </div>
        </section>


    </script>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </body></html>