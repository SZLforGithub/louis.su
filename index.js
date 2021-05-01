addEventListener("load", function () {
    anime.timeline()
        .add({
            targets: '.nes-container',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 750
        }).add({
            targets: '.title_container .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        }).add({
            targets: '.title_container .line',
            translateX: [0, document.querySelector('.title_container .title').getBoundingClientRect().width],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.title_container .title',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.line',
            opacity: 0,
            duration: 500,
            easing: "easeOutExpo",
            delay: 0
        }).add({
            targets: '.links',
            opacity: [0, 1],
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 700,
            delay: (el, i) => 30 * i
        });
});
