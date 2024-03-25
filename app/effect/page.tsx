"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Effect() {
  const container = useRef(null);

  useGSAP(
    (context) => {
      let tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });
      tl.to("#code-pill", { rotate: 360, duration: 1 });
      tl.to("#vercel-logo", { rotate: 360, duration: 1 });
      tl.to("#next-logo", { rotate: 360, duration: 1 });
      console.log(context);
    },
    {
      scope: container,
    }
  );
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#eeebdd]"
      ref={container}
    >
      <div className="max-w-5xl w-full grid grid-cols-2 gap-4 h-[300px] font-mono text-sm">
        <div className="imageWrapper relative">
          <Image
            src={"https://source.unsplash.com/random/"}
            alt="img01"
            // width={400}
            // height={300}
            className="object-cover"
            sizes="50vw"
            fill
          />
        </div>
        <div className="imageWrapper relative">
          <Image
            src={"https://source.unsplash.com/random/"}
            alt="img01"
            // width={400}
            // height={300}
            className="object-cover"
            sizes="50vw"
            fill
          />
        </div>
      </div>
    </main>
  );
}
