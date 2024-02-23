
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
}
window.onscrool = () =>{
	navbar.classList.remove('active');
}
// come from swiper js navigation
var swiper = new Swiper(".home-slider", {
	loop:true,
	// overfloe effect
	effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false ,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });