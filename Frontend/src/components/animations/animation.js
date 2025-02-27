import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const navAnimation = (element) => {
    gsap.fromTo(element, { y: -5 }, {
        y: 0,
        duration: 0.3,
        ease: "back.inOut(1.7)",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    })
}

const courseButton = (element) => {
    gsap.fromTo(element, { bottom: 0, opacity: 0 }, {
        bottom: 80,
        opacity: 1,
        ease: "power1.inOut"
    })
}
const courseButtonReverse = (element) => {
    gsap.to(element, { bottom: 0, opacity: 0, ease: "power1.in" })
}

const courseCardAnimation = (element) => {
    gsap.fromTo(element, { bottom: 0, opacity: 0 }, {
        bottom: 100,
        opacity: 1,
        ease: "power1.out",
        duration: 1
    })
}

export { navAnimation, courseButton, courseButtonReverse, courseCardAnimation }