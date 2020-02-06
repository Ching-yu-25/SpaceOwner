// 燈箱跳窗
function alertJump() {
    document.getElementById("myalert").style.display = "block";
}


//reservation-select切換
function openSelectR() {
    document.getElementById("room_choice").style.display = "inline-block";
    document.getElementById("lobby_choice").style.display = "none";
}

function openSelectL() {
    document.getElementById("room_choice").style.display = "inline-block";
    document.getElementById("lobby_choice").style.display = "none";
}

//device-choosed跳出
function showChoosed(i) {
    document.getElementsByClassName("choosed")[i].style.display = "block";;
    return;
}
//device-choosed關閉
function closeChoosed(i) {
    document.getElementsByClassName("choosed")[i].style.display = "none";
    return;
}

//search-radio切換
function searchTypeR() {
    document.getElementById("room_search").style.display = "block";
    document.getElementById("lobby_search").style.display = "none";
}
function searchTypeL() {
    document.getElementById("room_search").style.display = "none";
    document.getElementById("lobby_search").style.display = "block";
}

function init() {
    document.getElementById("resr_ok").onclick = alertJump;
}

window.onload = init;