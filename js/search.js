
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
}

window.onload = init;