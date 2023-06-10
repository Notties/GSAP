import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {

    gsap.set(circleRef.current, { opacity: 0 });

    gsap.to(circleRef.current, {
      x: 500,
      opacity: 1,
      duration: 5,
      scrollTrigger: {
        trigger: sectionRef.current,
        markers: true,
        start: "top center",
        end: "bottom 50px",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div id="firstCircle"></div>
      <div id="secondCircle"></div>
      <section ref={sectionRef}>
        <div ref={circleRef} id="thirdCircle"></div>
      </section>
    </>
  );
}

export default App;
