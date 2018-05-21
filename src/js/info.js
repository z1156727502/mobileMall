import '../css/info.less';
import $ from '../js/jquery-3.3.1.min.js';
import {searchId} from '../js/setDom.js';
import {chose , chosenRender} from '../js/eve.js'
let activeData;
let b = false;
let init = () => {
    $.ajax({
        type: 'GET',
        url: 'http://dwqc.gitee.io/mobilemall/api/goodsList.json',
        success: (data) => {
            activeData = searchId(data);
           },
        error: ()=>console.log('获取数据失败')
    });
   
    $('.chose').on('click', () => {
        chose(activeData , $('.title .price').html());
    });
    $('.buy').on('click', () =>{
        chose(activeData , $('.title .price').html());
        if($('.chosen').length){
            let bill = $('.chose-info .chose-price').html().slice(1) * $('.chose-info .num .num-info').html();
            bill = bill.toFixed(2);
            alert(`付钱了，${bill}元`);
        }
            
    });
    chosenRender();
}
init ();
