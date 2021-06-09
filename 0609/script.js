// jQuery를 사용하려면 아래 초기 구문이 있어야한다
/* 
1번 방식
    $(document).ready(function(){

        })
    })

2번 방식
$(function(){

})
*/
$(function(){

    var obj = document.querySelector('button');

    var $title = $('h1');
    var $button = $('button');

    // console.log(button);
    console.log($button);
        
        $button.click(function(){
            console.log('>>>>>>>> click !! >>>>>>')
    })
})