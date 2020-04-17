$(document).ready(function() {

	// Wysuwany panel menu
  $(".clickme").click(function() {

		$(".panel").show(300);
  });
  // /////////////////////////////////

  // ////////////////// zanikanie menu

	$(".panel").mouseleave(function() {
		$(".panel").hide(300);
		$(".clickme").removeClass("change");

	});

  $('.panel').on('swiperight', function (e) {
         $('.panel').hide(300);
         $(".clickme").removeClass("change");
      });

    $("[href]", ".panel").click(function() {
      $(".panel").hide(300);
  		$(".clickme").removeClass("change");
    });
// ///////////////// Koniec zanikania menu

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

// /////////////////przesuwanie do elemtnu ======================

    function scroll(e) {

    var href = $(this).attr('href');

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500);

    location.hash = href;

};

$('a[href^="#"]').click(scroll);



var timeout;

$(window).scroll(function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {

// Zanikanie strzłki ================
  if($(window).width() >950){
    if ($(this).scrollTop() < 300) {
      $(".arrow").fadeIn(500);
    } else {
      $(".arrow").fadeOut(500);
    }};

// Zanikanie ramki menu ===============
    if ($(window).scrollTop() < 50) {
      $(".ramkaMenu").hide(500);
    } else {
      $(".ramkaMenu").show(700);
    }
  }, 1);
  });

// ///////////// Koniec przesuwania do elemtnu
