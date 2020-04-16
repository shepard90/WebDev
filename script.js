$(document).ready(function() {

	// Wysuwany panel menu
  $(".clickme").click(function() {

		$(".panel").toggle(300);
  /*  if ($(window).width() > 650) {
      $(".menuText").toggle("invisible");
    }; */
  });

  //zanikanie menu
	$(".panel").mouseleave(function() {
		$(".panel").toggle(300);
		$(".clickme").removeClass("change");
	/*	$(".menuText").toggle(300); */
	});

// zanikanie menu po przesnięciu
 $(".panel").bind('swiperight', swiper);

 function swiper(event) {
   $(this).hide();
 };
 
  // Animacja i znikanie strzałki
    $(window).scroll(function() {
			if($(window).width() >950){
        if ($(this).scrollTop() < 300) {
          $(".arrow").fadeIn(500);
        } else {
          $(".arrow").fadeOut(500);
        }}
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $(".ramkaMenu").fadeIn(1500);
        } else {
          $(".ramkaMenu").fadeOut(1000);
        }
      });
      /* MainSection carousel */
      var myIndex = 0;
      carousel();

      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 9000);
      }
});

/* kod do animowanej ikony menu*/
function myFunction(x) {
	x.classList.toggle("change");
}
