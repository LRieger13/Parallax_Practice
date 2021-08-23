let controller = new ScrollMagic.controller();
let timeline = new TimelineMax();

/*
timeline
.to('.text', 5, {x: 500})
.to('.content-images', 3, {opacity: 0}, '-=2');*/

timeline
    .to(".bee", 3, {y: -300})
    .to(".bee2", 3, {y: -200}, "-=3")
    .to(".bg1", 3, {y: 50}, "-=3")
    .to('.content', 3, {top: '0%'}, '-=3');

    let scene = new ScrollMagic.scene({
        triggerElement: 'section',
        duration: '100%',
        triggerHook: 0, 
    })

    .setTween(timeline)
    .setPin("section")
    .addTo(controller);