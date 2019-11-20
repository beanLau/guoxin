(function () {
    var swiper = new Swiper('.swiper-container', {
        loop : true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    $(".tab-item").click(function(){
        if($(this).hasClass("tab-active")){
            return
        }
        let index = $(this).index();
        $(this).siblings().removeClass("tab-active")
        $(this).addClass("tab-active")
        $(this).parent().find(".gx-panel-body").hide()
        $(this).parent().find(".gx-panel-body").eq(index).show()
    })
    $(".tab-item2").click(function(){
        if($(this).hasClass("tab-active")){
            return
        }
        let index = $(this).index();
        $(this).siblings().removeClass("tab-active")
        $(this).addClass("tab-active")
        $(this).parent().parent().find(".gx-panel-body").hide()
        $(this).parent().parent().find(".gx-panel-body").eq(index).show()
    })
    $(".search-btn").click(function(){
        var searchName = $("#searchInput").val()
        var reqData = {
            name: searchName,
            pageNo: 1,
            pageSize: 8
        }
        $.ajax({
            url: "http://47.105.110.118:8080/jeecg-boot/menhu/mhOrgsite/list", data: reqData, type: "get", contentType: "application/json;charset=UTF-8", success: function (res) {
                if (res.code == 0) {
                    var dataList = res.result.records || []
                    var str = ""
                    for(var i = 0; i < dataList.length; i++){
                        str += "<a href='publicdetail?id='"+ dataList[i].id +" class='news-item'>"+ dataList[i].name +"</a>"
                    }
                    $(".public-list").html(str)
                }else{
                    alert(res.message)
                }
            }, error: function () {
                alert("网络异常，请稍后再试！")
            }
        });
    })
})()