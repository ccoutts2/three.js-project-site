import styles from "./Hero.module.scss";
import Image from "next/image";
import Picture1 from "../../../../public/assets/images/nice2.JPG";

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
  const mainItem = useRef();
  const sideLeft = useRef([]);
  const sideRight = useRef([]);
  const copyWrapperLeft = useRef([]);
  const copyWrapperRight = useRef([]);
  const copyWrapperMain = useRef();

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.set(letterWrapper1.current, { y: 400 });
        gsap.set(letterWrapper2.current, { y: 400 });
        gsap.set(copyWrapperLeft.current, { y: 50 });
        gsap.set(copyWrapperRight.current, { y: 50 });
        gsap.set(copyWrapperMain.current, { y: 50 });

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
              right: "12vw",
              padding: "0.5rem",
            },
            "<"
          )
          .to(
            mainItem.current,
            {
              duration: 1,
              ease: "power3.out",
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            },
            "<"
          )
          .to(mainItem.current, {
            duration: 1,
            ease: "power3.out",
            scale: 1,
          })
          .to(
            headerItem1.current,
            {
              duration: 1,
              ease: "power3.out",
              left: 0,
              scale: 1,
              bottom: "-15em",
            },
            "<"
          )
          .to(
            headerItem2.current,
            { duration: 1, ease: "power3.out", right: 0, scale: 1, bottom: "-15em" },
            "<"
          )
          .to(sideLeft.current, {
            duration: 1,
            ease: "power3.inOut",
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            stagger: 0.1,
          })
          .to(
            sideRight.current,
            {
              duration: 1,
              delay: 0.5,
              ease: "power3.inOut",
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              stagger: 0.1,
            },
            "<"
          )
          .to(copyWrapperLeft.current, {
            duration: 1,
            ease: "power3.out",
            y: 0,
            stagger: 0.05,
          })
          .to(
            copyWrapperRight.current,
            {
              duration: 1,
              ease: "power3.out",
              y: 0,
              stagger: 0.05,
            },
            "<"
          )
          .to(
            copyWrapperMain.current,
            {
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.05,
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

  const projectsLeft = [
    {
      title: "cat",
      href: "/projects/cat",
      src: "/assets/images/nice2.JPG",
      id: 1,
    },
    {
      title: "dog",
      href: "/projects/cat",
      src: "/assets/images/nice3.JPG",
      id: 2,
    },
    {
      title: "ball",
      href: "/projects/cat",
      src: "/assets/images/nice4.JPG",
      id: 3,
    },
  ];

  const projectsRight = [
    {
      title: "turtle",
      href: "/projects/cat",
      src: "/assets/images/nice6.JPG",
      id: 5,
    },
    {
      title: "mouse",
      href: "/projects/cat",
      src: "/assets/images/nice7.JPG",
      id: 6,
    },
    {
      title: "square",
      href: "/projects/cat",
      src: "/assets/images/nice6.JPG",
      id: 7,
    },
  ];

  return (
    <>
      <section className={styles.projectSection}>
        <div className={styles.container}>
          <div className={styles.items}>
            <div className={styles.itemsCol}>
              {projectsLeft.map((project, index) => (
                <div
                  key={project.id}
                  className={`${styles.item} ${styles.itemSide}`}>
                  <div className={styles.itemCopy}>
                    <div className={styles.itemCopyWrapper}>
                      <p ref={(e) => (copyWrapperLeft.current[index] = e)}>
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <div
                    ref={(e) => (sideLeft.current[index] = e)}
                    className={styles.itemImg}>
                    <Image fill={true} src={project.src} />
                  </div>
                </div>
              ))}
              {/* <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP1} className={styles.itemCopyWrapper}>
                    <p>Cat</p>
                  </div>
                  <div ref={copyWrapperP2} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem1} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div>
              <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP3} className={styles.itemCopyWrapper}>
                    <p>Dog</p>
                  </div>
                  <div ref={copyWrapperP4} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem2} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div>
              <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP5} className={styles.itemCopyWrapper}>
                    <p>Fish</p>
                  </div>
                  <div ref={copyWrapperP6} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem3} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div> */}
            </div>
            <div className={styles.itemsCol}>
              <div className={`${styles.item} ${styles.itemMain}`}>
                <div className={styles.itemCopy}>
                  <div className={styles.itemCopyWrapper}>
                    <p ref={copyWrapperMain}>Bee</p>
                  </div>
                </div>
                <div className={styles.itemImg}>
                  <Image ref={mainItem} fill={true} src={Picture1} />
                </div>
              </div>
            </div>
            <div className={styles.itemsCol}>
              {projectsRight.map((project, index) => (
                <div
                  key={project.id}
                  className={`${styles.item} ${styles.itemSide}`}>
                  <div className={styles.itemCopy}>
                    <div className={styles.itemCopyWrapper}>
                      <p ref={(e) => (copyWrapperRight.current[index] = e)}>
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <div
                    ref={(element) => (sideRight.current[index] = element)}
                    className={styles.itemImg}>
                    <Image fill={true} src={project.src} />
                  </div>
                </div>
              ))}

              {/* <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP9} className={styles.itemCopyWrapper}>
                    <p>Hum</p>
                  </div>
                  <div ref={copyWrapperP10} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem4} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div>
              <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP11} className={styles.itemCopyWrapper}>
                    <p>Dee</p>
                  </div>
                  <div ref={copyWrapperP12} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem5} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div>
              <div className={`${styles.item} ${styles.itemSide}`}>
                <div className={styles.itemCopy}>
                  <div ref={copyWrapperP13} className={styles.itemCopyWrapper}>
                    <p>Nice</p>
                  </div>
                  <div ref={copyWrapperP14} className={styles.itemCopyWrapper}>
                    <p>Lorem</p>
                  </div>
                </div>
                <div ref={sideItem6} className={styles.itemImg}>
                  <Image fill={true} src={Picture1} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
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

// const Projects = ({ item, projects }) => {
//   return (
//     <div ref={item} className={styles.container}>
//       <div className={styles.items}>
//         {projects.map((project) => (
//           <div key={project.id} className={styles.itemsCol}>
//             <div
//               id={`project-${project.id}`}
//               className={`${styles.item} ${styles.itemSide}`}>
//               <div className={styles.copy}>
//                 <div className={styles.itemCopyWrapper}>
//                   <p>{project.title}</p>
//                 </div>
//               </div>
//               <div className={styles.itemImg}>
//                 <Image fill={true} src={project.src} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Hero;
