$(function(){
    getTestQuest();
    var questAllData = null;

    $('.login-nav-und>p').on('click',function(){
        var $undDom = $('.login-nav-und'),
            $wayDom = $('.login-way'),
            index = $('.login-nav-und>p').index(this);
        if(index === 0){
            $undDom.removeClass('login-nav-active');
            $wayDom.removeClass('login-way-anim');
        }else{
            $undDom.addClass('login-nav-active');
            $wayDom.addClass('login-way-anim');
        }
    })

    $('.evaluation-btn-pre,.evaluation-btn-next').on('click',function(){
        var index =  $('.evaluation-btn>p').index(this);
        var isAdd = index == 0?-1:1;
        if(isAdd == -1){
            createHtmlQuest(isAdd);
        }else if(isAdd == 1){
            submitQuest(isAdd)
        }
    })
    $('.look-answer').on('click',function(){
        $('.login-nav-und').addClass('login-nav-active login-nav-answer');
        $('.login-way').addClass('login-way-anim');
        $('.login-loading').css('display','block');
        setTimeout(function () {
            $('.login-pop').addClass('login-pop-active');
        }, 50)
    })

    function getTestQuest(){
        var id = location.href.split('?id=')[1];
        $.ajax({
            url:'/EvalQuestionList',
            method:'POST',
            contentType: "application/json;charset=UTF-8",
            data:JSON.stringify({
                id:id
            }),
            success:function(res){
                if(res.code == '000000'){
                    questAllData = res.data;
                    $('.test-title').text(questAllData.evalName);
                    createHtmlQuest(0);
                }
            }
        })
    }

    function createHtmlQuest(num){
        var answerIndex = questAllData.answerIndex+parseInt(num),
        total = questAllData.questionCount;
        var data = questAllData.questionList[answerIndex];
        var html = '';
        questAllData.answerIndex = answerIndex;
        if(answerIndex == 0){
            $('.evaluation-btn-pre').css('visibility', 'hidden');
        }else{
            $('.evaluation-btn-pre').css('visibility', 'unset');
        }
        if(answerIndex == total-1){
            $('.evaluation-btn-next').css('visibility', 'hidden');
            $('.look-answer').show();
        }else{
            $('.evaluation-btn-next').css('visibility', 'unset');
            $('.look-answer').hide();
        }
        $('.test-sort').text((answerIndex+1)+'/'+total+'.'+data.stem).attr('_id',data.id);
        $.each(data.itemList, function(index, item){
            html += '<li><input type="radio" name="opt" '+ (item.selected?"checked":"") +' id=opt'+index+' _id='+item.id+'>\
                        <label for=opt'+index+'>\
                            <span></span>'+item.option+item.itemContent+'\
                        </label>\
                        </li>';
        })
        $('.evaluation-options').html(html);
    }

    function submitQuest(isAdd){
        var questionItemId = $('.evaluation-options input[type=radio]:checked').attr('_id');
        if(!questionItemId){
            layer.msg('请选择答案');
            return ;
        }
        var id = location.href.split('?id=')[1];
        $.ajax({
            url:'/SubmitQuestion',
            method:'POST',
            contentType: "application/json;charset=UTF-8",
            data:JSON.stringify({
                evalId:id,
                questionId:$('.test-sort').attr('_id'),
                questionItemId:questionItemId
            }),
            success:function(res){
                if(res.code == '000000'){
                    var num = questAllData.answerIndex;
                    var selected = $('.evaluation-options input[type=radio]').index($('.evaluation-options input[type=radio]:checked'));
                    var options = questAllData.questionList[num].itemList;
                    
                    for(var i=0;i<options.length;i++){
                        if(selected != i){
                            options[i].selected=0;
                        }else{
                            options[i].selected=1;
                        }
                    }
                    createHtmlQuest(isAdd);
                }
            }
        })
    }

})