(function ($) { 
    "use strict";

   //dropdown menu
  $('.drpdown').hover(function() {
    $(this).find('.dropdown-menu').css('transform','translateY(2px)').stop(true, true).delay(100).fadeIn(80);
  }, function() {
    $(this).find('.dropdown-menu').css('transform','translateY(0px)').stop(true, true).delay(100).fadeOut(80);  
  });


  //dropdown menu
  $('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(80);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(80);
    
  });


   //dropdown menu
   $('.dropdwn').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(10);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(10);
       
  });


  $(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   
   // breakpoint and up  
   $(window).resize(function(){
     if ($(window).width() >= 980){	
   
         // when you hover a toggle show its dropdown menu
         $(".navbar .dropdowntoggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
       // do something here
     }	
   });  
     
   // document ready  
   });

      //search button
  // $(document).ready(function () {

   // $(".btn").click(function () {
    //  $("form").toggleClass("active");
        
   // });
//});
  
   //search button
   
  var search_button = $('.fa-search'),
      close_button  = $('.clsse'),
      input = $('.input');
  search_button.on('click',function(){
    $(this).parent().addClass('open');
    close_button.fadeIn(500);
    input.fadeIn(500);
  });
  
  close_button.on('click',function(){
    search_button.parent().removeClass('open');
    close_button.fadeOut(500);
    input.fadeOut(500);
  });

//first side bar
const togglebtns = document.querySelectorAll('.nav-toggle');
const sideBar = document.querySelector('div.side-navbar');
const sidebarLinks = document.querySelectorAll('.side-navbar li');
const threeDotMenu = document.querySelector('div.nav-menu-icon');
const navMenu = document.querySelector('div.nav-menu');
const backgroundFader = document.getElementsByClassName('background-fader')[0];


function toggleSidebar() {
  sideBar.classList.toggle('show-side-navbar');
  backgroundFader.classList.toggle('fade-background');
}



togglebtns.forEach(togglebtn => {
  togglebtn.onclick = function() {
    toggleSidebar();
  };
});


backgroundFader.onclick = () => {
  toggleSidebar(); // this is much easier to understand
};

// Handle clicks on li element inside navigation sidebar 
sidebarLinks.forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    toggleSidebar();
  };
});




//second side bar
$(document).ready(function () {
  var $nav = $('.bysde');
  var $bars = $('.nav-togle');


  $bars.click(function () {
    /*$nav.css('width', "250px");*/
    $nav.addClass('show');
    $('.bck').css('opacity',"0.5");
    $('.bck').css('visibility',"visible")
  });

  $('.bck').click(function(){
   /* $nav.css('width', "0");*/
   $nav.removeClass('show');
    $(this).css('opacity',"0");
    $(this).css('visibility',"hidden")
  });
  $('.cls').click(function(){
   /* $nav.css('width', "0");*/
   $nav.removeClass('show');
    $('.bck').css('opacity',"0");
    $('.fbck').css('visibility',"hidden");

  });
 

});

//third side bar
$(document).ready(function () {
  var $nav = $('.sdebar');
  var $bars = $('.nv-tglle');


  $bars.click(function () {
   /* $nav.css('width', "250px");*/
    $nav.addClass('show');
    $('.bck').css('opacity',"0.5");
    $('.bck').css('visibility',"visible")
  });
  $(".nv-tglle").click(function(){
    $(this).css('visibility',"hidden");
  });

  $('.bck').click(function(){
  /*  $nav.css('width', "0 !important");*/
  $nav.removeClass('show');
    $(this).css('opacity',"0");
    $(this).css('visibility',"hidden")
    $(".nv-tglle").css('visibility',"visible");

  });
  $('.cls').click(function(){
   /* $nav.css('width', "0 !important");*/
   $nav.removeClass('show');
    $('.bck').css('opacity',"0");
    $('.fbck').css('visibility',"hidden");
    $(".nv-tglle").css('visibility',"visible");

  });
 

});


//sticky nav bar
$(document).ready(function () {
  var $sticky = $('.sticky');
  var stickyOffsetTop = $sticky.offset().top;

  $(window).scroll(function (e) {
      e.preventDefault();

      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyOffsetTop) {
          $sticky.addClass('is-fixed');
      } else {
          $sticky.removeClass('is-fixed');
      }
  });
});


//first owl carousel
$('.owl1').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:3,
       
      },
      1024:{
        items:3,
       
    },
    991:{
      items:2,
   
    },
 
        
        768 : {

          items:2,
         
        },

        575 : {

          items:1,
         
        },
       
        425: {

          items:1,
         
         
            
    },
   375: {

      items:1,
     
     
        
},
320: {
   
  items:1,
 
 
    
},
220: {
   
  items:1,
 
 
    
}
   
      
      
  }
})

//Second owl carousel
$('.owl2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:4,
          
      }, 
      1024 : {

        items:3,
       
      },
       
      991 : {

        items:2,
       
      },

      768:{

        items:1,

      },
      575 : {

        items:1,
       
      },
      425: {

        items:1,
       
       
          
      },
      375: {
   
         items:1,
        
        
           
   } ,
   320: {
   
    items:1,
   
   
      
  }, 
  220: {
   
    items:1,
   
   
      
  }
  }
})

//Third owl carousel
$('.owl3').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:4,
          
      }, 
      
      1024 : {

        items:3,
       
      },
      991 : {

        items:2,
       
      },

      768:{

        items:1,

      },
  
    575 : {

      items:1,
     
    },
     
     
      425: {

        items:1,
       
      },
      375: {
   
         items:1,
            
   },
   320: {
   
    items:1,
    
  },
  220: {
   
    items:1,
   
   
      
  }
  }
})
//Fourth owl carousel
$('.owl4').owlCarousel({
  loop:true,
  margin:2,
  nav:true,
  items:1,
  autoplay:true,
  
})




//Fifth owl carousel

$('.owl5').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:3,
         
      }, 
      1024:{
        items:3,
       
    }, 
    
    991:{
      items:2,
    
     },  
     

      768:{

        items:2,

      },
      575 : {

        items:1,
       
      },
     
     
      425: {

        items:1,
                
  },
  375: {
   
    items:1,
   
      
},
320: {
   
  items:1,
 
 
    
},
220: {
   
  items:1,
 
 
    
}
  }
})

//scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
      $(".auto-scroll-to-top").addClass("visible");                    
  } else {
      $(".auto-scroll-to-top").removeClass("visible");
  }        
});
  
$(".auto-scroll-to-top").click(function(){
  $("html, body").animate({scrollTop: 0}, 1000);
});




// model load
$( document ).ready(function() {
if (document.cookie.indexOf('visited=true') <= 0){
   $('#myModal').modal({show:true});
   

  }

});
//first angle down
$(".sort ul li").hover(function() { 
  $(this).toggleClass("hover");
});
//second angle down
$(".filter_content ul li a").click(function() { 
  $(this).toggleClass("focus");
});
//filter
var _range;
_range= new Vue({
  el:'.new-filter',
  data:{
      rangeBoundary0:20,
      rangeBoundary1:420,
  },
  computed:{
      rangeMax:function () {
          return Number(this.rangeBoundary0) >Number(this.rangeBoundary1)?this.rangeBoundary0:this.rangeBoundary1
      },
      rangeMin:function () {
          return Number(this.rangeBoundary0) >Number(this.rangeBoundary1)?this.rangeBoundary1:this.rangeBoundary0
      }
  }
  
})

//filtering toggle
$(document).ready(function(){

$(".clck_3").click(function() { 
  $(".filtering_sec .row").toggleClass("active");
});

});
//bar icon
$(document).ready(function(){
  $(".clck_2").addClass('activee');



})

$(document).ready(function(){
  $(".clck_1").click(function(){
    $(".Jewelry_sec_2").css("opacity","1");
    $(".Jewelry_sec_2").css("display","block");
    $(".Jewelry_sec_1").css("opacity","0");
    $(".Jewelry_sec_1").css("display","none");
    $(this).addClass('activee');
    $(".clck_2").removeClass('activee');

});
})

$(document).ready(function(){
  $(".clck_2").click(function(){
    $(".Jewelry_sec_1").css("display","block");
    $(".Jewelry_sec_1").css("opacity","1");
    $(".Jewelry_sec_2").css("opacity","0");
    $(".Jewelry_sec_2").css("display","none");
    $(".clck_1").removeClass('activee');
    $(this).addClass('activee');


});
})
//carousal product
$(document).ready(function () {
  // reference for main items
  var slider = $('#slider');
  // reference for thumbnail items
  var thumbnailSlider = $('#thumbnailSlider');
  //transition time in ms
  var duration = 500;

  // carousel function for main slider
  slider.owlCarousel({
   loop:false,
   nav:false,
   items:1
  }).on('changed.owl.carousel', function (e) {
   //On change of main item to trigger thumbnail item
   thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

  // carousel function for thumbnail slider
  thumbnailSlider.owlCarousel({
   loop:false,
   center:false, //to display the thumbnail item in center
   nav:false,
   responsiveClass:true,
   responsive:{
    0:{
     items:3
    },
    
    600:{
     items:3
    },
    1000:{
     items:3
    },
    
   }
  }).on('click', '.owl-item', function () {
   // On click of thumbnail items to trigger same main item
   slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

  }).on('changed.owl.carousel', function (e) {
   // On change of thumbnail item to trigger main item
   slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });


  //These two are navigation for main items
  $('.slider-right').click(function() {
   slider.trigger('next.owl.carousel');
  });
  $('.slider-left').click(function() {
   slider.trigger('prev.owl.carousel');
  });
 });

//sleeve
$(document).ready(function(){
 $(".l_1").click(function(){
  $(".panel").css("display","block");
  $(".panel_reviewe").css("display","none");
  $(".panel_entry").css("display","none");
  $(".panel_custome").css("display","none");

 });
 $(".l_2").click(function(){
  $(".panel").css("display","none");
  $(".panel_reviewe").css("display","block");
  $(".panel_entry").css("display","none");
  $(".panel_custome").css("display","none");

 });
 $(".l_3").click(function(){
  $(".panel").css("display","none");
  $(".panel_reviewe").css("display","none");
  $(".panel_entry").css("display","block");
  $(".panel_custome").css("display","none");

 });
 $(".l_4").click(function(){
  $(".panel").css("display","none");
  $(".panel_reviewe").css("display","none");
  $(".panel_entry").css("display","none");
  $(".panel_custome").css("display","block");

 });
 $(".revew").click(function(){

  $(".panel").css("display","none");
  $(".panel_reviewe").css("display","block");
  $(".panel_entry").css("display","none");
  $(".panel_custome").css("display","none");

 });
});

//mouse over 
$('.photo')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.mouseovr').css('transform','scale(1.5)')
    })
    .on('mouseout', function(){
      $(this).children('.mouseovr').css('transform','scale(1)');
    })
    .on('mousemove', function(e){
      $(this).children('.mouseovr').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
   
   //reviews
   
   //bar icon
$(document).ready(function(){
  $(".l_2").addClass('actvee');

})
$(document).ready(function(){
  $(".l_1").click(function(){
    $(this).addClass('actvee');
    $(".l_2").removeClass('actvee');
    $(".l_3").removeClass('actvee');
    $(".l_4").removeClass('actvee');
});
$(".l_2").click(function(){
  $(this).addClass('actvee');
  $(".l_1").removeClass('actvee');
  $(".l_3").removeClass('actvee');
  $(".l_4").removeClass('actvee');

});
$(".l_3").click(function(){
  $(this).addClass('actvee');
  $(".l_1").removeClass('actvee');
  $(".l_2").removeClass('actvee');
  $(".l_4").removeClass('actvee');

});
$(".l_4").click(function(){
  $(this).addClass('actvee');
  $(".l_1").removeClass('actvee');
  $(".l_2").removeClass('actvee');
  $(".l_3").removeClass('actvee');

});
});
//count box
var options = {
  selectors: {
      addButtonSelector: '.btn-add',
      subtractButtonSelector: '.btn-subtract',
      inputSelector: '.counter',
  }
};
$(".input-counter").inputCounter(options);
//another model 
//$(document).ready(function(){
 //$(" .clsss").click(function(){
   //$(".popUpMain").css('display','none');
   //$(".popUpMain").css('opacity','0');

 //});
 
 //$(".bck_grond").click(function(){
  //$(".popUpMain").css('display','none');
  //$(".popUpMain").css('opacity','0');
//});
//$(".clsss").click(function(){
 // $(".popUpMain").css('display','none');
  //$(".popUpMain").css('opacity','0');
//});
//})

//wow  .js
new WOW().init();
  
})(jQuery);
