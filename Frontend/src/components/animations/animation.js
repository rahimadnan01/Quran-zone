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

export { navAnimation }