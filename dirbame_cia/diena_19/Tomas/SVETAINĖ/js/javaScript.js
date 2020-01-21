// NAVIGATION START

$("nav div").click(function() {
$(".ul-header").slideToggle();
$("ul ul").css("display", "none");
});

$(".ul-header li").click(function() {
$("ul-header ul").slideUp();
   $(this).find('ul').slideToggle();
});

$(window).resize(function() {
if($(window).width() > 965) {
 $("ul").removeAttr('style');
 }
});

// NAVIGATION END
