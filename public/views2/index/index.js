function IndexPage() {
    this.mySwiper = null;
    this.teamSwiper = null;
    this.initSwiper();
    this.bindNavEvent();
    return this;
}
IndexPage.prototype.initSwiper = function () {
    this.mySwiper = new Swiper('#swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: false, // 循环模式选项
        mousewheel: true, //开启鼠标滚轮切换
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
            slideChangeTransitionStart: function () {
                // $('.active-nav').removeClass('active-nav')
                // $('.nav-item').eq(this.activeIndex).addClass('active-nav')
            }
        }
    })
    this.teamSwiper = new Swiper('#swiper-container2', {
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
            disabledClass: 'team-button-disabled'
        },
        slidesPerView: 4
    })
}
IndexPage.prototype.bindNavEvent = function () {
    // var that = this;
    // $('.nav-item').unbind('click').click(function (e) {
    //     var clickIndex = $(this).index();
    //     if (that.mySwiper.activeIndex == clickIndex) {
    //         return;
    //     }
    //     that.mySwiper.slideTo(clickIndex, 500, false);
    //     $('.active-nav').removeClass('active-nav')
    //     $('.nav-item').eq(clickIndex).addClass('active-nav')
    // })
    $('.swiper-first-wrap').click(); //解决默认无法使用鼠标滚轮切换bug
}
var indexPage = new IndexPage();