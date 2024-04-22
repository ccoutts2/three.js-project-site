import styles from "./Hero.module.scss";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const firstName = "chris";
  const surname = "coutts";
  const splitFirstName = firstName.split("");
  const splitSurname = surname.split("");

  const container = useRef();
  const tl = useRef();
  const letterWrapper1 = useRef([]);
  const letterWrapper2 = useRef([]);
  const headerItem1 = useRef();
  const headerItem2 = useRef();

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.set(letterWrapper1.current, { y: 400 });
        gsap.set(letterWrapper2.current, { y: 400 });

        tl.current = gsap
          .timeline({ paused: true, delay: 0.5 })
          .to(letterWrapper1.current, {
            duration: 1,
            ease: "power3.out",
            y: 0,
            stagger: 0.1,
          })
          .to(letterWrapper2.current, {
            duration: 1,
            ease: "power3.out",
            y: 0,
            stagger: 0.1,
          })
          .to(headerItem1.current, {
            duration: 1,
            ease: "power3.out",
            left: "12vw",
            padding: "0.5rem",
          })
          .to(
            headerItem2.current,
            {
              duration: 1,
              ease: "power3.out",
              right: "14vw",
              padding: "0.5rem",
            },
            "<"
          )
          .to(headerItem1.current, {
            left: 0,
            scale: 1,
            bottom: "-2em",
          })
          .to(
            headerItem2.current,
            {
              right: 0,
              scale: 1,
              bottom: "-2em",
            },
            "<"
          )
          .to(
            container.current,
            {
              bottom: "2em",
            },
            "<"
          );
      });

      return () => ctx.revert();
    },
    { scope: container }
  );

  useEffect(() => {
    tl.current.play();
  }, []);

  return (
    <>
      <div ref={container} className={styles.header}>
        <div
          ref={headerItem1}
          className={`${styles.headerItem} ${styles.headerItem1}`}>
          {splitFirstName.map((letter, index) => (
            <div key={index} className={styles.letter}>
              <div
                ref={(el) => (letterWrapper1.current[index] = el)}
                className={styles.letterWrapper}>
                {letter}
              </div>
            </div>
          ))}
        </div>
        <div
          ref={headerItem2}
          className={`${styles.headerItem} ${styles.headerItem2}`}>
          {splitSurname.map((letter, index) => (
            <div key={index} className={styles.letter}>
              <div
                ref={(el) => (letterWrapper2.current[index] = el)}
                className={styles.letterWrapper}>
                {letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
