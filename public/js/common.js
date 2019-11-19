$(function () {

    
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })
    $("#loginout").click(function(){
        $.ajax({
            url: "http://47.105.110.118:8080/jeecg-boot/menhu/login/logout", type: "POST", contentType: "application/json;charset=UTF-8", success: function (res) {
                if (res.code == 200) {
                    delCookie("gxtoken")
                    delCookie("username")
                    location.reload();
                }else{
                    alert(res.message)
                }
            }, error: function () {
                alert("网络异常，请稍后再试！")
            }
        });
    })
})