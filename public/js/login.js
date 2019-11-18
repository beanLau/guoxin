$(function () {
    function Login() {
        this.canGetCode = false;
        this.checkCountDown();
        this.bindBottomEvent();
    }
    Login.prototype.checkCountDown = function () {
        var that = this;
        if ($.cookie("sendCode")) {//cookie存在倒计时
            that.canGetCode = false;
            var interval = setInterval(function () {//每秒读取一次cookie
                //从cookie 中读取剩余倒计时
                total = $.cookie("sendCode");

                //把剩余总倒计时减掉1
                total--;
                if (total == 0) {//剩余倒计时为零，则显示 重新发送，可点击
                    //清除定时器
                    clearInterval(interval);
                    //删除cookie
                    total = $.cookie("sendCode", total, { expires: -1 });
                    //显示重新发送
                    $('#sendCode').html('重新发送');
                    that.canGetCode = true;
                } else {//剩余倒计时不为零
                    //重新写入总倒计时
                    $('#sendCode').html(total + 's');
                    $.cookie("sendCode", total);
                }
            }, 1000);
        } else {
            that.canGetCode = true;
        }
    }
    Login.prototype.bindBottomEvent = function () {
        var that = this;
        $('#sendCode').click(function () {
            var _this = this;
            if (/^1[0-9][0-9]\d{8}$/.test($('#phone').val())) {
                if (!that.canGetCode) {//cookie存在倒计时
                    return
                }
                that.canGetCode = false;
                $.ajax({
                    type: 'post',
                    url: "/getCode",
                    data: JSON.stringify({
                        'telephone': $("#phone").val()
                    }),
                    contentType: "application/json;charset=UTF-8",
                    dataType: 'JSON',
                    success: function (res) {
                        if (res.code != '000000') {
                            layer.msg(res.message);
                            return
                        } else {
                            layer.msg(res.message);
                            $.cookie("sendCode", 60, { expires: 1 });
                            var i = 60;
                            var timer = setInterval(function () {
                                $(_this).html(i + 's');
                                //$(_this).html(i + 's后重新发送');
                                i--;
                                $.cookie("sendCode", i, { expires: 1 });
                                if (i <= 0) {
                                    clearInterval(timer);
                                    $.cookie("sendCode", 0, { expires: -1 });
                                    $(_this).html('重新发送');
                                    that.canGetCode = true;
                                }
                            }, 1000)
                        }
                    },
                    error: function (res) {
                        layer.msg('网络异常，请稍后再试！');
                        $.cookie("sendCode", 0, { expires: -1 });
                        that.canGetCode = true;
                    }
                });
            } else {
                layer.msg('手机号格式错误');
                return
            }
        })
        $('.send-code').click(function () {
            var _this = this;
            if (/^1[0-9][0-9]\d{8}$/.test($('#inputPhone').val())) {
                if (!that.canGetCode) {//cookie存在倒计时
                    return
                }
                that.canGetCode = false;
                $.ajax({
                    type: 'post',
                    url: "/getCode",
                    data: JSON.stringify({
                        'telephone': $("#inputPhone").val()
                    }),
                    contentType: "application/json;charset=UTF-8",
                    dataType: 'JSON',
                    success: function (res) {
                        if (res.code != '000000') {
                            layer.msg(res.message);
                            return
                        } else {
                            layer.msg(res.message);
                            $.cookie("sendCode", 60, { expires: 1 });
                            var i = 60;
                            var timer = setInterval(function () {
                                $(_this).html(i + 's');
                                //$(_this).html(i + 's后重新发送');
                                i--;
                                $.cookie("sendCode", i, { expires: 1 });
                                if (i <= 0) {
                                    clearInterval(timer);
                                    $.cookie("sendCode", 0, { expires: -1 });
                                    $(_this).html('重新发送');
                                    that.canGetCode = true;
                                }
                            }, 1000)
                        }
                    },
                    error: function (res) {
                        layer.msg('网络异常，请稍后再试！');
                        $.cookie("sendCode", 0, { expires: -1 });
                        that.canGetCode = true;
                    }
                });
            } else {
                layer.msg('手机号格式错误');
                return
            }
        })
        $('#enrollBtn').click(function () {
            var _this = this;
            if (!/^1[0-9][0-9]\d{8}$/.test($('#phone').val())) {
                layer.msg('手机号格式错误');
                return
            }
            if (!$('#code').val()) {
                layer.msg('请输入验证码');
                return
            }
            $.ajax({
                type: 'post',
                url: "/quickLogin",
                data: JSON.stringify({
                    'telephone': $("#phone").val(),
                    'smsCode': $("#code").val()
                }),
                contentType: "application/json;charset=UTF-8",
                dataType: 'JSON',
                success: function (res) {
                    if (res.code != '000000') {
                        layer.msg(res.message);
                        return
                    }
                    layer.msg('报名成功！');
                    $.cookie("gxtoken", JSON.stringify(res.data));
                    setTimeout(() => {
                        location.reload()
                    }, 1000);
                },
                error: function (res) {
                    layer.msg('网络异常，请稍后再试！');
                }
            });
        })
        $('.login-btn').click(function () {
            var _this = this;
            if (!/^1[0-9][0-9]\d{8}$/.test($('#inputPhone').val())) {
                layer.msg('手机号格式错误');
                return
            }
            if (!$('#inputCode').val()) {
                layer.msg('请输入验证码');
                return
            }
            $.ajax({
                type: 'post',
                url: "/quickLogin",
                data: JSON.stringify({
                    'telephone': $("#inputPhone").val(),
                    'smsCode': $("#inputCode").val()
                }),
                contentType: "application/json;charset=UTF-8",
                dataType: 'JSON',
                success: function (res) {
                    if (res.code != '000000') {
                        layer.msg(res.message);
                        return
                    }
                    layer.msg('登录成功！');
                    $.cookie("gxtoken", JSON.stringify(res.data));
                    setTimeout(() => {
                        location.reload()
                    }, 1000);
                },
                error: function (res) {
                    layer.msg('网络异常，请稍后再试！');
                }
            });
        })
        $('.signin').on('click', function () {
            var $undDom = $('.login-nav-und'),
                $wayDom = $('.login-way');
            $('.login-loading').css('display', 'block');
            $undDom.removeClass('login-nav-active');
            $wayDom.removeClass('login-way-anim');
            setTimeout(function () {
                $('.login-pop').addClass('login-pop-active');
                $('.login-nav-und').removeClass('login-nav-answer');
            }, 50)
        })
        $('.login-nav-und>p').on('click', function () {
            var $undDom = $('.login-nav-und'),
                $wayDom = $('.login-way'),
                index = $('.login-nav-und>p').index(this);
            if (index === 0) {
                $undDom.removeClass('login-nav-active');
                $wayDom.removeClass('login-way-anim');
            } else {
                $undDom.addClass('login-nav-active');
                $wayDom.addClass('login-way-anim');
            }
        })
        // 点击遮罩隐藏
        $('.close').on('click', function (e) {
            $('.login-loading').hide();
            $('.login-pop').removeClass('login-pop-active');
        })
        // 取消冒泡
        // $('.login-pop').on('click', function (e) {
        //     e.stopPropagation();
        // })
        // 推出登录
        $('.loginout').on('click', function (e) {
            $.ajax({
                type: 'post',
                url: "/loginout",
                contentType: "application/json;charset=UTF-8",
                dataType: 'JSON',
                success: function (res) {
                    if (res.code != '000000') {
                        layer.msg(res.message);
                        return
                    } else {
                        layer.msg(res.data);
                        $.cookie("gxtoken", 0, { expires: -1 });
                        setTimeout(function () {
                            location.reload()
                        }, 1000)
                    }
                },
                error: function (res) {
                    layer.msg('网络异常，请稍后再试！');
                    $.cookie("sendCode", 0, { expires: -1 });
                    that.canGetCode = true;
                }
            });
        })
    }
    var login = new Login();
})