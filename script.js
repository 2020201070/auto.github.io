function blink_text() {
    $('.blink').fadeOut(300);
    $('.blink').fadeIn(600);
}
setInterval(blink_text, 1000);

var elem=document.getElementById("box1");
elem.style.transition="width 1s ease 0s";
elem.addEventListener("transitionend",function()
{
	alert("Thank you for rating");
});
