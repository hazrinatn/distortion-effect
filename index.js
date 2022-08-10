new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './images/01.png',
    image2: './images/02.png',
    displacementImage: './images/diss.png',
    imagesRatio: 380 / 300
})

// NAVBAR
TweenMax.staggerFrom(".navbar div", 1.5, {
    delay: 1.2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
}, 0.08);

// MEDIA
TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 1.2,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut
}, 0.08);

// TEXT
TweenMax.from(".text h1 .hidetext", 1.5, {
    delay: 0.8,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from(".text h3 .hidetext", 1.5, {
    delay: 0.9,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from(".text p .hidetext", 1.5, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from(".text h2", 1.5, {
    delay: 1.2,
    opacity: 0,
    x: "-10000",
    ease: Expo.easeInOut
});

// SPONSOR
TweenMax.from(".sponsor img", 1.5, {
    delay: 1.2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});

TweenMax.from(".sponsor p", 1.5, {
    delay: 1.3,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});

// DISTORTION
TweenMax.from(".distortion", 1.5, {
    delay: 1.7,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});

// OVERLAY
TweenMax.to(".first", 1.5, {
    delay: 0.1,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
    delay: 0.3,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
    delay: 0.5,
    top: "-100%",
    ease: Expo.easeInOut
});