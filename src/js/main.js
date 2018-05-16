require('../css/mobileMall.less');
import $ from '../js/jquery-3.3.1.min.js';
import {createList} from '../js/setDom.js';
function init(){
    $.ajax({
        url:'http://localhost:8080/api/goodsList.json',
        type:'GET',
        success: createList,
        error: ()=>console.log('请求失败'),
    })
}
init();
