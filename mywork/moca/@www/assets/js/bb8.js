if ($('#application').length) {
    window.onpopstate = function (event) {
        window.location.reload();
    };
}



$('body').on('click','.dropList_school_year .list',function(){
    $('input[name="school_year"]').val($(this).find('p').html())
});
$('body').on('click','.dropList_career .list',function(){
    $('input[name="career"]').val($(this).find('p').html())
});


$('body').on('click','.dropList_priority_time_1 .list',function(){
    $('input[name="priority_time_1"]').val($(this).find('p').html())
});
$('body').on('click','.dropList_priority_day_1 .list',function(){
    $('input[name="priority_day_1"]').val($(this).find('p').html())
});
$('body').on('click','.dropList_priority_time_2 .list',function(){
    $('input[name="priority_time_2"]').val($(this).find('p').html())
});
$('body').on('click','.dropList_priority_day_2 .list',function(){
    $('input[name="priority_day_2"]').val($(this).find('p').html())
});

$('body').on('click','.dropList_lang .list',function(){
    $('input[name="lang"]').val(catch_lang())
});


$('body').on('click','.dropList_theme .list',function(){
    $('input[name="theme"]').val($(this).find('p').html())
});


$('body').on('submit','#form_resident',function(e){
    e.preventDefault();
});
$('body').on('click','.send_form_resident',function(){
    if( $('.agreeBtn.confirm').length){
        $('.form_submit').click();
        var is_ok = $('#form_resident')[0].checkValidity()
        if(!is_ok)return;
        var form = $('#form_resident');
        $.ajax({
            url: form.attr('action'),
            method: 'POST', 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: form.serialize(),
        }).done(function (json_data) {
            var data = JSON.parse(json_data);
            if(data['rtn'] == 'true' ){
                $('#form_resident')[0].reset();
                alert('寄送成功');
            }else{
                alert(data['message'])
            }
        });
    }else{
        alert('未勾選同意遵守館方的相關規範');
    }
});




$('body').on('submit','#form_volunteer',function(e){
    e.preventDefault();
});

$('body').on('click','.send_form_volunteer',function(){
    if( $('.agreeBtn.confirm').length){

        $('.form_submit2').click();
        var is_ok = $('#form_volunteer')[0].checkValidity()
        if(!is_ok)return;

        var form = $('#form_volunteer');
        $.ajax({
            url: form.attr('action'),
            method: 'POST', 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: form.serialize(),
        }).done(function (json_data) {
            var data = JSON.parse(json_data);
            if(data['rtn'] == 'true' ){
                $('#form_volunteer')[0].reset();
                alert('寄送成功');
            }else{
                alert(data['message'])
            }
        });

    }else{
        alert('未勾選同意遵守館方的相關規範');
    }
});


$('body').on('submit','#form_art_house',function(e){
    e.preventDefault();
});

$('body').on('click','.send_form_art_house',function(){
    if( $('.agreeBtn.confirm').length){

        $('.form_submit3').click();
        var is_ok = $('#form_art_house')[0].checkValidity()
        if(!is_ok)return;

        var form = $('#form_art_house');
        $.ajax({
            url: form.attr('action'),
            method: 'POST', 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: form.serialize(),
        }).done(function (json_data) {
            var data = JSON.parse(json_data);
            if(data['rtn'] == 'true' ){
                $('#form_art_house')[0].reset();
                alert('寄送成功');
            }else{
                alert(data['message'])
            }
        });

    }else{
        alert('未勾選同意遵守館方的相關規範');
    }
});

function catch_lang(){
    var langArr = '';
    $('.groupFrame .group').each(function(){
        var langType = $(this).find('.langType .showBox .character').text()
        if(langType == '請選擇語言類型'){ return;}
        var langLv = $(this).find('.langLv .showBox .character').text()
        if(langLv == '請選擇語言程度'){ return;}
        langArr += langType+'-'+langLv+'。';
    })
    return langArr;
}



$('body').on('click','.shareWebBtn',function(){
	
    var link = location.href;
    
    if($(this).hasClass('facebook')){
        window.open('http://www.facebook.com/sharer/sharer.php?u=' + link);
    }

    if($(this).hasClass('twitter')){
        window.open('https://twitter.com/intent/tweet?url=' + link);
    }

    if($(this).hasClass('line')){
        window.open('http://line.naver.jp/R/msg/text/?' + link);
    }

    if($(this).hasClass('weibo')){
        window.open('http://service.weibo.com/share/share.php?'+'title='+document.title+'?'+ link);
    }
    
});