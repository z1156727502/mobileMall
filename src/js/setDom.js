import $ from '../js/jquery-3.3.1.min.js';

function createList(data) {
    data = data.list;
    let str = '';
    data.forEach((ele, index) => {
        str += ` <li>
                    <a href = ".../info.html?id=${ele.id}">
                        <img src="${ele.imgurl[0]}" alt="商品展示">
                        <div class="info">
                            <h5 class="title">${ele.name}</h5>
                            <del>￥998</del>
                            <p class="price">￥
                                <span>${ele.spectList[0].price}</span>
                            </p>
                        </div>
                    </a>
                </li>`
    });
    $('.list ul').html(str);
}

function searchId(data) {
    data = data.list;
    let locationList = location.search.slice(1).split('&');
    let len = locationList.length;
    for (let i = 0; i < len; i++) {
        let id = locationList[i].split('=');
        if (id[0] === 'id') {
            for (let j = 0; j < data.length; j++) {
                if (data[j].id === id[1]) {
                    setInfoPic(data, j);
                    return data[j];
                    break;
                }
            }
        }
    }
}

function setInfoPic(data, id) {
    let str = `<img src="${data[id].imgurl[0]}" alt="商品展示">`
    $('.pic').html(str);
    infotitle(data[id]);
}

function infotitle(data) {
    let $title = $('.title');
    let min = data.spectList[0].price;
    let max = data.spectList[0].price;
    $title.find('.name').html(data.name);
    data.spectList.forEach((ele) => {
        if(ele.price > max){
            max = ele.price;
        }else if(ele.price < min){
            min = ele.price;
        }
    })
    $title.find('.price').html(`￥${min}-${max}`);
    infoinfo(data);
}
function infoinfo(data){
    let str = '';
    data.imgurl.forEach((ele) => str += `
    <li>
    <img src="${ele}" alt="商品展示">
    </li>
    `);
    $('.info .info-cont ul').html(str);
}

export {createList , searchId};
