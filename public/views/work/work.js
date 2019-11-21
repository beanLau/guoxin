$(function () {
    function getQueryString(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURI(r[2]);
        return null;
    }
    $(".code-img").click(function(){
        $(".code-img").attr("src",'http://39.105.127.212:8080/jeecg-boot/menhu/login/captcha?v=' + Date.now())
    })
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
        if(!getQueryString("type") || getQueryString("type") == 1){
            submitWeituo();
        }else if(getQueryString("type") == 2){
            submitWeixiu();
        }else if(getQueryString("type") == 3){
            submitPeijing();
        }else {
            submitShenqing();
        }
        
    })
    function submitWeituo(){
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

        var reqData = {}
        reqData.company = companyName
        reqData.linkMan = name
        reqData.email = email
        reqData.remarks = remark
        reqData.sampleName = prdName
        reqData.sampleType = $("#prdType").val()
        reqData.sex = sex
        reqData.weituoOrg = sendCompanyName
        $.ajax({url:"http://39.105.127.212:8080/jeecg-boot/menhu/mhTrustOnline/add",data:JSON.stringify(reqData),type:"POST",contentType:"application/json;charset=UTF-8",success:function(res){
            if(res.code == 200){
                alert(res.message)
                location.reload()
            }else{
                alert(res.message)
            }
        },error:function(){
            alert("网络异常，请稍后再试！")
        }});
    }
    function submitWeixiu(){
        var name = $("#name").val()
        var sex = $("input[name='sex']:checked").val()
        var telphone = $("#telphone").val()
        var phone = $("#phone").val()
        var email = $("#email").val()
        var address = $("#address").val()
        var prdName = $("#prdName").val()
        var buyType = $("#buyType").val()
        var desc = $("#desc").val()
        var prdType = $("#prdType").val()
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
        if(!prdName){
            alert("请输入产品名称")
            return
        }
        if(!buyType){
            alert("请输入购买渠道")
            return
        }
        if(!desc){
            alert("请输入故障描述")
            return
        }
        if(!prdType){
            alert("请输入产品类型")
            return
        }
        if(!remark){
            alert("请输入备注信息")
            return
        }
        var reqData = {}
        reqData.phone = telphone
        reqData.tel = phone
        reqData.linkMan = name
        reqData.email = email
        reqData.sampleName = prdName
        reqData.buyWay = buyType
        reqData.linkSex = sex
        reqData.brokeInfo = desc
        reqData.sampleType = 1
        reqData.remark = remark
        $.ajax({url:"http://39.105.127.212:8080/jeecg-boot/menhu/mhBsRepair/add",data:JSON.stringify(reqData),type:"POST",contentType:"application/json;charset=UTF-8",success:function(res){
            if(res.code == 200){
                alert(res.message)
                location.reload()
            }else{
                alert(res.message)
            }
        },error:function(){
            alert("网络异常，请稍后再试！")
        }});
    }
    function submitPeijing(){
        var name = $("#name").val()
        var sex = $("input[name='sex']:checked").val()
        var telphone = $("#telphone").val()
        var phone = $("#phone").val()
        var email = $("#email").val()
        var address = $("#address").val()
        var leftNum = $("#leftNum").val()
        var rightNum = $("#rightNum").val()
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
        if(!leftNum){
            alert("请输入左眼度数")
            return
        }
        if(!rightNum){
            alert("请输入右眼度数")
            return
        }
        var reqData = {}
        reqData.phone = telphone
        reqData.tel = phone
        reqData.linkMan = name
        reqData.email = email
        reqData.linkSex = sex
        reqData.address = address
        reqData.leftEye = leftNum
        reqData.rightEye = rightNum
        $.ajax({url:"http://39.105.127.212:8080/jeecg-boot/menhu/mhBsGlasses/add",data:JSON.stringify(reqData),type:"POST",contentType:"application/json;charset=UTF-8",success:function(res){
            if(res.code == 200){
                alert(res.message)
                location.reload()
            }else{
                alert(res.message)
            }
        },error:function(){
            alert("网络异常，请稍后再试！")
        }});
    }
    function submitShenqing(){
        var name = $("#name").val()
        var isWork = $("input[name='sex']:checked").val()
        var age = $("#age").val()
        var area = $("#area").val()
        var express = $("#express").val()
        var companyName = $("#companyName").val()
        var position = $("#position").val()
        var address = $("#address").val()
        if(!name){
            alert("请输入姓名")
            return
        }
        if(!age){
            alert("请输入年龄")
            return
        }
        if(!area){
            alert("请输入所属地区")
            return
        }
        if(!companyName){
            alert("请输入公司名称")
            return
        }
        if(!position){
            alert("请输入职位名称")
            return
        }
        if(!express){
            alert("请输入工作经历")
            return
        }
        if(!address){
            alert("请输入曾获奖项")
            return
        }
        var reqData = {}
        reqData.name = name
        reqData.age = age
        reqData.area = area
        reqData.isWork = isWork
        reqData.jobName = position
        reqData.orgName = companyName
        reqData.workExp = express
        reqData.prizes = address
        $.ajax({url:"http://39.105.127.212:8080/jeecg-boot/menhu/mhBsAbility/add",data:JSON.stringify(reqData),type:"POST",contentType:"application/json;charset=UTF-8",success:function(res){
            if(res.code == 200){
                alert(res.message)
                location.reload()
            }else{
                alert(res.message)
            }
        },error:function(){
            alert("网络异常，请稍后再试！")
        }});
    }
})