var swiper = new Swiper(".special-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
      delay:9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
      delay:9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  // let section = document.querySelectorAll("section");
  // let navLinks = document.querySelectorAll("header .navbar a");

  // window.onscroll = () =>{

  //   section.forEach(sec =>{
  //     let top = window.scrollY;
  //     let height = sec.offsetHeight;
  //     let offset = sec.offsetTop - 150;
  //     let id = sec.getAttribute("id");

  //     if(top => offset && top < offset  + height){
  //       navLinks.forEach(links =>{
  //         links.classList
  //         document.querySelector("header .navbar a[href*='+id+']");
  //       });
  //     };

  //   })
  // }

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline()

tl.from(".logo", {duration: 1, y: "-50vh"})
  .from(".navbar", {duration: 1.2, y: "-50vh"}, "-=.9")
  .from("label", {duration: 1, y: "-50vh"}, "-=1")
  .from(".mainhead", {duration: 1.3, y: "100vh"}, "-=.5")
  .from(".mainpara", {duration: 1, y: "100vh"}, "-=.7")
  .from(".mainbtn", {opacity: 0, duration: 2, y: "40vh", ease: "elastic"}, "+=.5");

gsap.from(".aboutpic",{
  x: "-20vw",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
  }
})

gsap.from(".aboutcont",{
  x: "20vw",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  }
})

gsap.from(".orimage",{
  x: "-20vw",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".order",
    start: "top 70%",
  }
})

gsap.from(".form",{
  x: "20vw",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".order",
    start: "top 50%",
  }
})











