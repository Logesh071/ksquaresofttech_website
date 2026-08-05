import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
}

export default useAnimations;