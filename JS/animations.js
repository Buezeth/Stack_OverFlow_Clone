gsap.registerPlugin(ScrollTrigger) ;

const boxes = document.querySelectorAll('.box');


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-section-4-end",
        markers: true,
        toggleActions: "restart none restart none",
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".advantages-texts",
        markers: true,
        toggleActions: "restart none restart none",
    },
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".technical-topics",
        markers: true,
        toggleActions: "restart none restart none",
    },
});


tl.from(".box-1", {scale: 0, opacity: 0})
.to(".box-1", {scale: 1, ease: Elastic.easeInOut, opacity: 1})
.from(".box-2", {scale: 0, opacity: 0})
.to(".box-2", {scale: 1, ease: Elastic.easeInOut, opacity: 1})
.from(".box-3", {scale: 0, opacity: 0})
.to(".box-3", {scale: 1, ease: Elastic.easeInOut, opacity: 1})
.from(".box-4", {scale: 0, opacity: 0})
.to(".box-4", {scale: 1, ease: Elastic.easeInOut, opacity: 1});

tl2.from(".ad-1",{scale: 0, duration: 0.3, ease: Bounce.easeInOut})
.to(".ad-1", {scale: 1, duration: 0.3, ease: Bounce.easeInOut})
.from(".ad-2", {scale: 0, duration: 0.3, ease: Bounce.easeInOut})
.to(".ad-2", {scale: 1, duration: 0.3, ease: Bounce.easeInOut})
.from(".ad-3", {scale: 0, duration: 0.3, ease: Bounce.easeInOut})
.to(".ad-3", {scale: 1, duration: 0.3, ease: Bounce.easeInOut});

tl3.from(".pop-1",{scale: 0, duration: 0.3})
.to(".pop-1", {scale: 1.1, duration: 0.3})
.from(".pop-2", {scale: 0, duration: 0.3})
.to(".pop-2", {scale: 1, duration: 0.3})
.from(".pop-3", {scale: 0, duration: 0.3})
.to(".pop-3", {scale: 1, duration: 0.3})
.from(".pop-4", {scale: 0, duration: 0.3})
.to(".pop-4", {scale: 1, duration: 0.3})
.from(".pop-5", {scale: 0, duration: 0.3})
.to(".pop-5", {scale: 1, duration: 0.3})
.from(".pop-6", {scale: 0, duration: 0.3})
.to(".pop-6", {scale: 1, duration: 0.3});




// gsap.from(".box-2", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "buttom buttom",
//         toggleActions: "restart none restart none "
//     },
//     scale: 0,
// })

// gsap.to(".box-2", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "center center",
//     },
//     delay: ,
//     scale: 1,
// })
// gsap.from(".box-3", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "buttom buttom",
//         toggleActions: "restart none restart none "
//     },
//     scale: 0,
// })

// gsap.to(".box-3", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "center center",
//     },
//     delay: 5,
//     scale: 1,
// })
// gsap.from(".box-4", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "buttom buttom",
//         toggleActions: "restart none restart none "
//     },
//     scale: 0,
// })

// gsap.to(".box-4", {
//     scrollTrigger : {
//         trigger: ".main-section-4-end",
//         markers: true,
//         // start: "center center",
//     },
//     delay: 7,
//     scale: 1,
// })
