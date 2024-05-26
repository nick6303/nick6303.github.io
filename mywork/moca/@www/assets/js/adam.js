var baseUrl = $("base").attr('href');
var _token = $("#the_token").val();

var Visit =
{
    CheckQuota: function CheckQuota() {

        // 更換日期重置
        $('body .mocaPageBody .reserFormLbox #form1 .tourYear li').each(function () {
            $(this).on('click', function () {
                $('body .mocaPageBody .reserFormLbox #form1 .tourDay .showBox .character').html('日');
                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .showBox .character').html('請選擇導覽服務的場次');
                $('body .mocaPageBody .reserFormLbox #form1 .visitorNumber .showBox .character').html('請選擇您的參觀人數');
            })
        })
        
        $('body .mocaPageBody .reserFormLbox #form1 .tourMonth li').each(function () {
            $(this).on('click', function () {
                $('body .mocaPageBody .reserFormLbox #form1 .tourDay .showBox .character').html('日');  
                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .showBox .character').html('請選擇導覽服務的場次');
                $('body .mocaPageBody .reserFormLbox #form1 .visitorNumber .showBox .character').html('請選擇您的參觀人數');
            })            
        })

        $('body .mocaPageBody .reserFormLbox #form1 .tourDay li').each(function () {
            $(this).on('click',function(){
                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .showBox .character').html('請選擇導覽服務的場次');
                $('body .mocaPageBody .reserFormLbox #form1 .visitorNumber .showBox .character').html('請選擇您的參觀人數');
            // 取得年月日欄位
                Year = $('body .mocaPageBody .reserFormLbox #form1 .tourYear p').html();
                Mouth = $('body .mocaPageBody .reserFormLbox #form1 .tourMonth p').html();
                Day = $(this).find('p').html();
            // 判斷是否填寫年份月份
                if (Year == '年' || Mouth == '月'){

                    alert('請先填選年份/月份');
                    setTimeout(() => {
                        $('body .mocaPageBody .reserFormLbox #form1 .tourDay .showBox .character').html('日');                        
                    }, 0);

                }else{                    
                    console.log(Year + '/' + Mouth + '/' + Day);

                    $('body .mocaPageBody .reserFormLbox #form1 .tourTime .time1,.time2,.time3').addClass('notAllow');
                    
                    $.ajax({
                        method: "get",
                        url: baseUrl + "/Checkform/CheckQuota",
                        data: {
                            Year: Year,
                            Mouth: Mouth,
                            Day: Day,
                        }
                    }).done(function (data) {
                        
                        if (data.success == false) {
                            alert(data.warning);
                        }else if(data.success == true){

                            if(data.time1 != 'full'){
                                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .time1').removeClass('notAllow');
                                Visit.ChangeTime1(data.time1);
                            }
                            if(data.time2 != 'full'){
                                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .time2').removeClass('notAllow');
                                Visit.ChangeTime2(data.time2);
                            }
                            if(data.time3 != 'full'){
                                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .time3').removeClass('notAllow');
                                Visit.ChangeTime3(data.time3);
                            }
                            console.log('time1:' + data.time1);
                            console.log('time2:' + data.time2);
                            console.log('time3:' + data.time3);

                        } else if (data.success =='true1') {

                            if (data.time1 != 'full') {
                                $('body .mocaPageBody .reserFormLbox #form1 .tourTime .time1').removeClass('notAllow');
                                Visit.ChangeTime1(data.time1);
                            }
                            console.log('time1:' + data.time1);
                        }                             
                    });
                    
                }
            })            
        })        
    },

    ChangeTime1:function ChangeTime1(e){
        
        $('body .mocaPageBody .reserFormLbox #form1 .tourTime').on('click','.time1',function(){
            $('.visitorNumber .dropList .list').each(function () {
                if($(this).attr('data-no') > e){
                    $(this).addClass('notAllow')
                }else{
                    $(this).removeClass('notAllow')
                }
                
            })
        });

    },
    ChangeTime2:function ChangeTime2(e){
        
        $('body .mocaPageBody .reserFormLbox #form1 .tourTime').on('click','.time2',function(){
            $('.visitorNumber .dropList .list').each(function () {
                if($(this).attr('data-no') > e){
                    $(this).addClass('notAllow')
                }else{
                    $(this).removeClass('notAllow')
                }
                
            })
        });

    },
    ChangeTime3: function ChangeTime3(e) {

        $('body .mocaPageBody .reserFormLbox #form1 .tourTime').on('click', '.time3', function () {
            $('.visitorNumber .dropList .list').each(function () {
                if ($(this).attr('data-no') > e) {
                    $(this).addClass('notAllow')
                } else {
                    $(this).removeClass('notAllow')
                }

            })
        });

    }

}











$(document).ready(function () {
    if ($("body").hasClass("visit")) {
        Visit.CheckQuota();
    }
});