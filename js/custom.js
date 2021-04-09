    //navbar js

    $(function(){

        $('.navbar .nav-item').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            });




    //banner slider

    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,                
        dots: true,
    });



    // about venobox
   $('.venobox').venobox({
    overlayColor: 'rgba(226, 62, 56, 0.5)',
    spinner: 'three-bounce',
   
    });



    //testimonial
    $('.test-slider').slick({
    arrows: false,
   slidesToShow: 2,      
   autoplay: true,   
   dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
      
   ]
   
    });


     //COUNTER UP
   $('.counter').counterUp({
    time: 1500,    

   });

   
    //animate__animated;

	new WOW().init();


//brand-slider
    
  //   $(".brand-slider").slick({

  //   arrows: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   dots: false,
  //   centerMode: true,
  //   centerPadding: "0",
  //   prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
  //   nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
            
  //           dots: false
  //         }
  //       },
  //       {
  //           breakpoint: 768,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
              
  //             dots: false
  //           }
  //         },
  //         {
  //           breakpoint: 576,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
              
  //             dots: false
  //           }
  //         },
      
  //  ]


  //   });


  //   }); 


  $('.brand-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
    nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
    responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
});

$('.color-icon').on('click',function(){
  $('.color-picker').toggleClass('colorpos');  
});

$('.color-picker ul .blue').on('click',function(){
  $('body').addClass('blue').removeClass('green purple orange');
});

$('.color-picker ul .green').on('click',function(){
  $('body').addClass('green').removeClass('blue purple orange');
});

$('.color-picker ul .purple').on('click',function(){
  $('body').addClass('purple').removeClass('green blue orange');
});

$('.color-picker ul .orange').on('click',function(){
  $('body').addClass('orange').removeClass('green purple blue');
});

$('.color-picker ul .default').on('click',function(){
  $('body').removeClass('blue green purple orange');
});

}); 

//back to top, fixed-nav

    $(function(){
        var backToTop = $('.back-to-top');
        var html_body = $('html,body');
        
        
            $(window).scroll(function () { 
                var scrolling = $(this).scrollTop();
                if(scrolling > 200){
                    backToTop.fadeIn();
                }else{
                    backToTop.fadeOut();
                }
                if(scrolling >200){
                     $('.navbar').addClass('fixed-nav');
                 }else{
                     $('.navbar').removeClass('fixed-nav');
                 }
            });
        
        
            backToTop.on('click',function(){
                html_body.animate({
                    scrollTop:0,
                },1500);
            });
        
            $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        html_body.animate({
                            scrollTop: target.offset().top - 0
                        }, 1500,);
                        return false;
                    }
                }
            });
            
        });
        

    
// $(function(){

//     $(window).scroll(function () {

//         var scrolling = $(this).scrollTop();
//         var html_body = $('html,body');

//         if (scrolling > 200) {

//             $(".navbar").addClass("fixed-nav");
//         } else {

//             $(".navbar").removeClass("fixed-nav")
//         }

//         if (scrolling > 550) {

//             $(".back-to-top").fadeIn(1000)

//         } else {

//             $(".back-to-top").fadeOut(1000)

//         }  
        
            
//      $(".back-to-top").click(function(){
        
//         $("html,body").animate({
            
//             scrollTop:"0px"
//         },1500)
          
//       });
  

//       $('.navbar .navbar-nav .nav-item a').on('click', function () {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 html_body.animate({
//                     scrollTop: target.offset().top - 0
//                 }, 1500,);
//                 return false;
//             }
//         }
//     });
    

// });


//     });
