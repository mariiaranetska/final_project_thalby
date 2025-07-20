$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
   // navText : ["<img src='../img/arrow-left1.svg'>","<img src='../img/arrow-left.svg'>"],
    navText : ["",""],
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:3
        }
    }

});