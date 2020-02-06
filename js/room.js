//room-換圖換文字
// function picCha(i) {
//     // var roomType = document.getElementsByClassName("type");
//     var picBox = document.getElementById("room_pic_change").style.backgroundImage = roomImg[i];;
//     var roomTitle = document.getElementById("room_title").innerText = title[i];;
//     var roomImg = ["url('./images/room_1.jpg')", "url('./images/room_2.jpg')", "url('./images/room_3.jpg')", "url('./images/room_4.jpg')", "url('./images/room_5.jpg')", "url('./images/room_6.jpg')", "url('./images/room_7.jpg')"]
//     var title = ["獨者星球", "湛藍之星", "落秋葉", "黑白棋", "秘密基地", "南方風情", "綠木榻榻"]
//     return;
// }

function RoomIntro(e) {
    var roomPic = e.target;
    var picTitle = ["獨者星球", "湛藍之星", "落秋葉", "黑白棋", "秘密基地", "南方風情", "綠木榻榻"]
    var imgNum = picTitle.indexOf(roomPic.innerText);
    document.getElementById("room_pic_change").style.backgroundImage = `url("./images/room_${imgNum+1}.jpg")`;
    document.getElementById("room_title").innerText = roomPic.innerText;
}

function init() {
    var roomChoose = document.querySelectorAll(".all_type .type");
    for (var i = 0 ; i < 7 ; i++) {
        roomChoose[i].onclick = RoomIntro;
    }
}

window.onload = init;