"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Trigger() {
  useLayoutEffect(() => {
    const imageWrappers = document.querySelectorAll(".image-wrapper");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=50%",
    });

    let tl = gsap.timeline();

    tl.to(imageWrappers, {
      x: "50%",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        markers: true,
        scrub: 2,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="content-wrapper">
      <div className="image-wrapper relative flex flex-col opacity-0">
        <Image
          src="https://source.unsplash.com/random/1"
          alt="bg1"
          width={400}
          height={400}
          className="py-10"
        />
        <Image
          src="https://source.unsplash.com/random/2"
          alt="bg2"
          width={400}
          height={400}
        />
        <Image
          src="https://source.unsplash.com/random/3"
          alt="bg3"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
