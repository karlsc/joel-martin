$(document).foundation();

//// TYPEWRTITER EFFECT
var captionLength = 0;
var caption = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.";

setInterval ('cursorAnimation()', 700);
type();

function type() {
    $("#caption").html(caption.substr(0, captionLength++));
    setTimeout('type()', 60);
}

//// BLINKING CURSOR
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

//// SCROLL EFFECT
var automaticScroll = false;

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $(".overlay").fadeOut(100);
            $("#menu").fadeOut("fast");
            automaticScroll = true;
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000, function(){
                automaticScroll = false;
            });
            return false;
        }
    }
});

//// MENU EFFECT
var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if($(window).scrollTop() > $("header").height()){
        if (st < lastScrollTop && automaticScroll === false){
            $("#menu").fadeIn("fast");
        } else {
            $("#menu").fadeOut("fast");
        }
    }
    else {
        $("#menu").hide();
    }
    lastScrollTop = st;
});

//// OVERLAY
$('.material-icons').on('click', function() {

    $(".overlay").fadeIn(100).css("display","flex");

    $(document).on('click','.overlay, .overlay img', function(evt) {
        if (evt.target === evt.currentTarget) {
            $(".overlay").fadeOut(100);
        }
    });
});