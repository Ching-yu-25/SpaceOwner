function $(id) {
    return document.getElementById(id);
}

$("ham_btn").onclick = function () {
    $("menu").classList.toggle("show");
    $("ham_btn").classList.toggle("is-active")
}

document.querySelectorAll("#menu li")[0].onclick=function () {
    document.getElementsByClassName("li_in")[0].style.display="block";
}
// // hamburger icon 的切換
// $(function () {
//     $("button.hamburger").on("click", function () {
//         $(this).toggleClass("is-active");
//     });

// });