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
    });


     //COUNTER UP
   $('.counter').counterUp({
    time: 1500,
    
    });


//brand-slider
    
    $(".brand-slider").slick({

    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
    nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    autoplay: true,
    autoplaySpeed: 2000,

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
