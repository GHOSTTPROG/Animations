$(document).ready(function() {
    var dot1 = $(".container .dot1"),
        dot2 = $(".container .dot2"),
        dot3 = $(".container .dot3"),
        dot4 = $(".container .dot4"),
        dot5 = $(".container .dot5"),
        dot6 = $(".container .dot6"),
        dot7 = $(".container .dot7"),
        dot8 = $(".container .dot8"),
        dot9 = $(".container .dot9"),
        dot10 = $(".container2 .dot1"),
        dot11 = $(".container2 .dot2"),
        dot12 = $(".container2 .dot3"),
        dot13 = $(".container2 .dot4"),
        dot14 = $(".container2 .dot5"),
        dot15 = $(".container2 .dot6"),
        dot16 = $(".container2 .dot7"),
        dot17 = $(".container2 .dot8"),
        dot18 = $(".container2 .dot9"),
        tl1,
        tl2;

    tl1 = new TimelineLite({ onComplete: reverse1, onReverseComplete: restart1 });
    tl1.to(dot2, 0, { opacity: 1 })
        .to(dot2, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot2, 0, { opacity: 0 })
        .to(dot3, 0, { opacity: 1 })
        .to(dot3, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot3, 0, { opacity: 0 })
        .to(dot4, 0, { opacity: 1 })
        .to(dot4, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot4, 0, { opacity: 0 })
        .to(dot5, 0, { opacity: 1 })
        .to(dot5, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot5, 0, { opacity: 0 })
        .to(dot6, 0, { opacity: 1 })
        .to(dot6, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot6, 0, { opacity: 0 })
        .to(dot7, 0, { opacity: 1 })
        .to(dot7, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot7, 0, { opacity: 0 })
        .to(dot8, 0, { opacity: 1 })
        .to(dot8, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot8, 0, { opacity: 0 })
        // .to(dot9, 0, { opacity: 1 })
        // .to(dot9, 1, { left: "99.1%", ease: Power0.easeNone })
        // .to(dot9, 0, { opacity: 0 })

    // tl.pause();
    function reverse1() {
        tl1.reverse();
    }

    function restart1() {
        tl1.restart();
    }
    tl2 = new TimelineLite({ onComplete: reverse2, onReverseComplete: restart2 });
    tl2.to(dot17, 0, { opacity: 1 })
        .to(dot17, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot17, 0, { opacity: 0 })
        .to(dot16, 0, { opacity: 1 })
        .to(dot16, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot16, 0, { opacity: 0 })
        .to(dot15, 0, { opacity: 1 })
        .to(dot15, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot15, 0, { opacity: 0 })
        .to(dot14, 0, { opacity: 1 })
        .to(dot14, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot14, 0, { opacity: 0 })
        .to(dot13, 0, { opacity: 1 })
        .to(dot13, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot13, 0, { opacity: 0 })
        .to(dot12, 0, { opacity: 1 })
        .to(dot12, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot12, 0, { opacity: 0 })
        .to(dot11, 0, { opacity: 1 })
        .to(dot11, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot11, 0, { opacity: 0 })
        // .to(dot10, 0, { opacity: 1 })
        // .to(dot10, 1, { left: "99.1%", ease: Power0.easeNone })
        // .to(dot10, 0, { opacity: 0 })

    // tl.pause();
    function reverse2() {
        tl2.reverse();
    }

    function restart2() {
        tl2.restart();
    }




});