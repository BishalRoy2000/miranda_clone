// Locomotive for smooth scorlling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap for loading animation....
let tl = gsap.timeline();
tl.to("#animation", {
    y: "100vh",
    scale: 0.4,
    duration: 0
})
tl.to("#animation", {
    y: "-73.5vh",
    duration: 1,
    ease: "Expo.easeOut",
    delay: 1
})
tl.to("#animation", {
    y: "0vh",
    rotate: -720,
    scale: 1,
    duration: 2.1,
    ease: "Expo.easeInOut",
    delay: 0.7
})
