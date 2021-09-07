let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

/*
timeline
.to('.text', 5, {x: 500})
.to('.content-images', 3, {opacity: 0}, '-=2');*/

timeline
    .to(".bg1", 3, {y: 50})
    .to(".bee", 3, {y: -300}, "-=3")
    .to(".content", 3, {top: '0%'}, '-=3')
    .from(".content-images", {opacity: 0})
    .to(".content-images", {opacity: 1, duration: 6, ease: "elastic"}, "-=3");
    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.section',
        duration: '200%',
        triggerHook: 0, 
    })

    .setTween(timeline)
    .setPin(".section")
    .addTo(controller);


/* CARD FLIP TO FULL DIV
let card = document.querySelector('.cards');
card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
}); */