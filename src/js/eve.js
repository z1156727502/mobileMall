import $ from '../js/jquery-3.3.1.min.js';
let f = false;
function chose(data , p) {
    let $ch = $('.chose-info');
     if(!f){
        $ch.find('img').attr('src' , data.imgurl[0]);
        $ch.find('.chose-price').html(p);
        let str = '';
        data.spectList.forEach(ele => {
            str +=`
            <div pri="${ele.price}" num="${ele.quantity}">${ele.spect}</div>
            `
        });
        $ch.find('.chose-grade').html(str);
    }
    
    $('.chose-info').css('display', 'block')
    $('.chose-info-wrap').css('display', 'block').one('click' , (e) => {
        e.stopPropagation();
        $('.chose-info-wrap').css('display', 'none');
        $('.chose-info').css('display', 'none');
    });
        
}
function chosenRender(){
    let $ch = $('.chose-info');
    // let f = false;
    $ch.find('.chose-grade').on('click' , 'div' , function(e){
        e.stopPropagation();
        f = true;
        $('.chosen').removeClass('chosen');
        $(this).addClass('chosen');
        let n = $ch.find('.num .num-info').html();
        let m = $('.chosen').attr('num');
        if(n > m){
            n = m;
        }
        $ch.find('.chose-price').html('￥' + $(this).attr('pri'));
        $ch.find('.chosen-info span').html($(this).html() + ' ' + n + '件');
    });
    $ch.find('.num .before').on('click' , (e) => {
        e.stopPropagation();
        let n = $ch.find('.num .num-info').html();
        let max = $('.chosen').attr('num');
        n--;
        if(n < 1){
            n = 1;
        }
        $ch.find('.num .num-info').html(n + '');
        if(f){
            if(n > max){
                n = max;
            }
            $ch.find('.chosen-info span').html($('.chosen').html() + ' ' + $ch.find('.num .num-info').html() + '件');
        }
        });
    $ch.find('.num .after').on('click' , (e) => {
        e.stopPropagation();
        let n = $ch.find('.num .num-info').html();
        let max = $('.chosen').attr('num');
        n++;
        if(n < 1){
            n = 1;
        }
        $ch.find('.num .num-info').html(n + '');
        if(f){
            if(n > max){
                n = max;
            }
            $ch.find('.chosen-info span').html($('.chosen').html() + ' ' + $ch.find('.num .num-info').html() + '件');
        }
    });
}



export {chose , chosenRender};