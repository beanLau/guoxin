$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })
    $("#loginout").click(function(){
        $.ajax({
            url: "http://39.105.127.212:8080/jeecg-boot/menhu/login/logout",headers:{'X_ACCESS_TOKEN': getCookie("gxtoken")}, type: "POST", contentType: "application/json;charset=UTF-8", success: function (res) {
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
    $(".top-search-btn").click(function(){
        var title =  $("#topSearchInput").val()
        if(title){
            window.location.href = "/news?title="+ encodeURI(title)
        }
    })

    $(".nav-item").click(function(){
        let dom = $(this)
        if(dom.hasClass("active-nav")){
            dom.removeClass("active-nav")
            return;
        }else{
            $(".active-nav").removeClass("active-nav")
            dom.addClass("active-nav")
        }
    })
})