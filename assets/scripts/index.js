$(document).ready(function(){

  document.querySelector(".js-nav-toggle").addEventListener("click",toggleMenuFunction);
  document.querySelector(".js-top").addEventListener("click",toTop);
  window.onscroll = function() {scrollFunction()};

  function toggleMenuFunction() {
    let burger = document.querySelector(".nav__menu-toggle");
    let burgerMenu = document.querySelector(".nav__menu");
    let mainnav = document.querySelector(".nav");
    burger.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    mainnav.classList.toggle("open");
  }

  function toTop() {
    if(window.scrollTo){
      window.scrollTo({top:0,behavior:"smooth"})
    }else{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  function scrollFunction() {
    let mainnav = document.getElementsByClassName("nav")[0];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mainnav.classList.add("fixed");
    } else {
      mainnav.classList.remove("fixed");
    }
  }

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

  $('.partner__slider').slick({
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