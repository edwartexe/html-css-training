function myFunction() {
  let burger = document.getElementsByClassName("nav__menu-toggle")[0];
  let burgerMenu = document.getElementsByClassName("nav__menu")[0];
  let mainnav = document.getElementsByClassName("nav")[0];
  burger.classList.toggle("open");
  burgerMenu.classList.toggle("open");
  mainnav.classList.toggle("closed");
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $('.brand__slider').slick({
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide:2,
    responsive: [
      {breakpoint: 1160,
        settings: {
          infinite: true,
          mobileFirst:true,
          pauseOnFocus:true,
          arrows: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $('.card-slider').slick({
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:1,
    responsive: [
      {breakpoint: 1440,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          mobileFirst:true,
          pauseOnFocus:true,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $('.industry-slider').slick({
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide:2,
    responsive: [
      {breakpoint: 1440,
        settings: {
          infinite: true,
          mobileFirst:true,
          pauseOnFocus:true,
          arrows: false,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $('.partner-slider').slick({
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:1,
    responsive: [
      {breakpoint: 833,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1,
        }
      }
    ]
  });

});