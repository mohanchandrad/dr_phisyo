



const menu = document.getElementById('menu')
let toggle = false;
const toggleMenu = () => {
    if(toggle === false) {
        menu.style.transform = 'translate(0%)';
        toggle = true
    } else if(toggle === true) {
        menu.style.transform = 'translate(-120%)';
        toggle = false
    }
}


window.addEventListener('scroll', function() {
    const hed = this.document.getElementById('stick',)
   
if(window.scrollY > 200) {
    hed.classList.add('stikey')
}else{
    hed.classList.remove('stikey')
}
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
