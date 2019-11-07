$(function(){
    $('.pay').on('click',function(){
        $('.login-nav-und').addClass('login-nav-active');
        $('.login-way').addClass('login-way-anim');
        $('.login-loading').css('display','block');
        setTimeout(function () {
            $('.login-pop').addClass('login-pop-active');
        }, 50)
    })

    $('.isLogin').on('click',function(){
        var cookie =  $.cookie('yfpcdata');
        if(cookie){
            isCookieExpire(this,cookie);
        }else{
            $('.signin').click();
        }
    })

    function isCookieExpire(that,cookie){
        $.ajax({
            url:'/checkLogin',
            method:'POST',
            success:function(res){
                if(res.code == '000000'){
                    if(res.data.isLogin == 0){
                        $('.signin').click();
                    }else{
                        location.href=$(that).data('href');
                    }
                }
            }
        })
        
    }
})
