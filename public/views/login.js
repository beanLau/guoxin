
$(function () {
    $(".code-img").click(function () {
        $(".code-img").attr("src", 'http://47.105.110.118:8080/jeecg-boot/menhu/login/captcha?v=' + Date.now())
    })
    $("#loginbtn").click(function () {
        let userName = $("#userName").val();
        let password = $("#password").val();
        let code = $("#code").val();
        if (!userName) {
            alert("请输入用户名")
            return
        }
        if (!password) {
            alert("请输入密码")
            return
        }
        if (!code) {
            alert("请输入验证码")
            return
        }
        if (code.length != 4) {
            alert("验证码错误")
            $(".code-img").click();
            $("#code").val("");
            return
        }
        var reqData = {
            loginName: userName,
            password: password,
            captcha: code
        }
        $.ajax({
            url: "http://47.105.110.118:8080/jeecg-boot/menhu/login/login", data: JSON.stringify(reqData), type: "POST", contentType: "application/json;charset=UTF-8", success: function (res) {
                if (res.code == 200) {
                    setCookie("gxtoken",res.token)
                    setCookie("username",res.result.user.userName)
                    window.location.href = "/"
                }
            }, error: function () {
                alert("网络异常，请稍后再试！")
            }
        });
    })
})