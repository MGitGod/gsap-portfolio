"use client";

import gsap from "gsap";
// import { gsap } from "gsap-trial";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
// import { SplitText } from "gsap-trial/SplitText";

// gsap.registerPlugin(SplitText);

// let mySplitText = new SplitText(".split", { type: "chars" });
// let chars = mySplitText.chars;

// gsap.from(chars, {
//   yPercent: 130,
//   stagger: 0.02,
//   ease: "back.out",
//   duration: 1,
// });

export default function Zoom() {
  const container = useRef(null);

  useGSAP(
    (context) => {
      let tl = gsap.timeline();
      tl.fromTo(
        "#one",
        { x: -50, autoAlpha: 0, scale: 0 },
        { x: 50, autoAlpha: 1, scale: 1, duration: 2, repeat: -1 }
      );
      tl.to("#two", { rotate: 360, duration: 1 });
      tl.fromTo(
        "#three",
        { y: 50 },
        {
          y: -50,
          duration: 2,
          ease: "power1.inOut",
          stagger: {
            each: 0.15,
            repeat: -1,
            yoyo: true,
          },
        }
      );
      console.log(context);
    },
    {
      scope: container,
    }
  );
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      ref={container}
    >
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          id="one"
          src="/01.png"
          alt="01"
          width={400}
          height={300}
          priority
        />
        <Image
          id="two"
          src="/02.png"
          alt="01"
          width={400}
          height={300}
          priority
        />
        <Image
          id="three"
          src="/03.png"
          alt="01"
          width={400}
          height={300}
          priority
        />
      </div>
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div> */}
    </main>
  );
}
