$(function () {
    $("#prdType").change(function(){
        var value = $("#prdType").val()
        if(value==1 || value == 2 || value == 3){ //钟表/眼镜/皮具型式检验
            $(".sendCompanyName-wrap,.area-wrap,.prdCount-wrap,.sendTime-wrap,.buyTime-wrap,.buyType-wrap").hide();
            $('.companyName-wrap').show();
        }else if(value == 4 || value == 5){ //司法技术鉴定
            $('.companyName-wrap').hide();
            $(".sendCompanyName-wrap,.area-wrap").show();
            $(".prdCount-wrap,.sendTime-wrap").show();
            $('.buyTime-wrap,.buyType-wrap').hide();
        }else{ //个人委托真假鉴定
            $('.companyName-wrap').hide();
            $('.sendCompanyName-wrap').hide();
            $('.area-wrap').show();
            $(".prdCount-wrap,.sendTime-wrap").hide();
            $('.buyTime-wrap,.buyType-wrap').show();
        }
    })
    $(".btn-sm").click(function(){ //提交按钮
        var value = $("#prdType").val()
        var name = $("#name").val()
        var sex = $("input[name='sex']:checked").val()
        var companyName = $("#companyName").val()
        var area = $("#area").val()
        var sendCompanyName = $("#sendCompanyName").val()
        var telphone = $("#telphone").val()
        var phone = $("#phone").val()
        var email = $("#email").val()
        var address = $("#address").val()
        var prdName = $("#prdName").val()
        var buyTime = $("#buyTime").val()
        var buyType = $("#buyType").val()
        var prdCount = $("#prdCount").val()
        var sendTime = $("#sendTime").val()
        var remark = $("#remark").val()
        if(!name){
            alert("请输入姓名")
            return
        }
        if(!telphone){
            alert("请输入联系电话")
            return
        }
        if(!phone){
            alert("请输入手机号")
            return
        }
        if(!email){
            alert("请输入邮箱")
            return
        }
        if(!address){
            alert("请输入地址")
            return
        }
        if(value==1 || value == 2 || value == 3){ //钟表/眼镜/皮具型式检验
            if(!companyName){
                alert("请输入公司名称")
                return
            }
        }else if(value == 4 || value == 5){ //司法技术鉴定
            if(!sendCompanyName){
                alert("请输入送检单位/人名称")
                return
            }
            if(!area){
                alert("请输入所属地区")
                return
            }
            if(!prdCount){
                alert("请输入送检数量")
                return
            }
            if(!sendTime){
                alert("请选择预计送检时间")
                return
            }
        }else{ //个人委托真假鉴定
            if(!area){
                alert("请输入所属地区")
                return
            }
            if(!buyTime){
                alert("请选择购买时间")
                return
            }
            if(!buyType){
                alert("请输入购买渠道")
                return
            }
        }
    })
})