// 燈箱跳窗
function alertJump() {
    document.getElementById("myalert").style.display = "block";
}

//device-choosed跳出
function showChoosed(i) {
    document.getElementsByClassName("choosed")[i].style.display = "block";
    return;
}
//device-choosed關閉
function closeChoosed(i) {
    document.getElementsByClassName("choosed")[i].style.display = "none";
    return;
}

