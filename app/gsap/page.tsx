"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/dist/Flip";
import { TextPlugin } from "gsap/TextPlugin";
import styles from "./gsap.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
gsap.registerPlugin(TextPlugin);

//replaces yourElement's text with "This is the new text"

// function changeGrid(dog: any) {
//   let dogs = gsap.utils.toArray<HTMLDivElement>(".flip");
//   let bigDog = dogs[0];

//   dogs.forEach(
//     (dog) => {
//       dog.addEventListener("click", (e) => changeGrid(dog));
//       useLayoutEffect(() => {
//         if (dog === bigDog) return;

//         let state = Flip.getState(dogs);

//         bigDog.dataset.grid = dog.dataset.grid;
//         dog.dataset.grid = "img-1";
//         bigDog = dog;

//         Flip.from(state, {
//           absolute: true,
//           ease: "power1.inOut",
//         });
//       });
//     },
//     [dogs]
//   );
// }

function Gsap() {
  useEffect(() => {
    // Gsap TextPlugin
    // gsap.to("h1", {duration: 3, text: "this is a to tween"})
    // gsap.from("h2", {duration: 3, text: ""})

    //GOOD:
    // gsap.to(".message", {
    //   duration: 4,
    //   text: {
    //     value: "gsap ライブラリを使うと文字のアニメーションも簡単です。こんな感じで1文字ずつ文字を表示することができます。このアニメーションは5秒間に少しずつ早くなるように表示設定しています。",
    //     newClass: "class2",
    //     delimiter: " ",
    //   },
    // });

    const el = document.querySelector(".message");

    gsap.to(el, {
      duration: 5,
      text: `gsap ライブラリを使うと文字のアニメーションも簡単です。こんな感じで1文字ずつ文字を表示することができます。このアニメーションは5秒間に少しずつ早くなるように表示設定しています。`,
      ease: `power2.in`,
    });
  });

  const pinRef = useRef(null);
  useLayoutEffect(() => {
    gsap.to(pinRef.current, {
      background: "#fff",
      color: "#999",
      scrollTrigger: {
        trigger: pinRef.current,
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="container">
      {/* TextPluginのエリア */}
      <div className="textWrapper">
        <div className="message"></div>
        <h1></h1>
        <h2></h2>
      </div>

      <div className="h-screen bg-blue-400 w-full flex justify-center items-center">
        <p className="text-[100px]">section 1</p>
      </div>
      <div
        ref={pinRef}
        className="h-screen w-full bg-gray-400 flex items-center justify-center"
      >
        <p className="text-[100px]">section 2</p>
      </div>
      <div className="h-screen bg-green-400 w-full flex justify-center items-center">
        <p className="text-[100px]">section 3</p>
      </div>

      <div className="grid grid-cols-9 grid-rows-9 gap-4 w-[60vw] min-h-[60vh] aspect-[1/1] ">
        <div className="flip col-span-6 row-span-6 relative" data-grid="img-1">
          <Image
            src="https://source.unsplash.com/random/20"
            alt=""
            objectFit="cover"
            className="rounded-lg"
            fill
          />
        </div>
        <div
          className="flip col-span-3 row-span-3 col-start-7 relative"
          data-grid="img-2"
        >
          <Image
            src="https://source.unsplash.com/random/21"
            alt=""
            objectFit="cover"
            className="rounded-lg"
            fill
          />
        </div>
        <div
          className="flip col-span-3 row-span-3 col-start-7 row-start-4 relative"
          data-grid="img-3"
        >
          <Image
            src="https://source.unsplash.com/random/22"
            alt=""
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div
          className="flip col-span-3 row-span-3 col-start-7 row-start-7 relative"
          data-grid="img-4"
        >
          <Image
            src="https://source.unsplash.com/random/23"
            alt=""
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div
          className="flip col-span-3 row-span-3 col-start-4 row-start-7 relative"
          data-grid="img-5"
        >
          <Image
            src="https://source.unsplash.com/random/24"
            alt=""
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div
          className="flip col-span-3 row-span-3 col-start-1 row-start-7 relative"
          data-grid="img-6"
        >
          <Image
            src="https://source.unsplash.com/random/25"
            alt=""
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* mason layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 mt-10">
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/1"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/2"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/3"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/4"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/5"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/6"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="mb-4"
          src="https://source.unsplash.com/random/7"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="mx-auto my-10 w-full max-w-sm lg:flex lg:max-w-full">
        <Image
          src="https://source.unsplash.com/random/13"
          alt=""
          width={192}
          height={192}
          className=" bg-img flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
          title="Woman holding a mug"
        />
        <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
          <div className="mb-8">
            <p className="flex items-center text-sm text-gray-600">
              <svg
                className="mr-2 h-3 w-3 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="mb-2 text-xl font-bold text-gray-900">
              Can coffee make you a better developer?
            </div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="w-10 h-10 rounded-full mr-4"
              src="https://source.unsplash.com/random/7"
              alt="Avatar of Jonathan Reinink"
              width={40}
              height={40}
            />
            <div className="text-sm">
              <p className="leading-none text-gray-900">Motohiro Ishikura</p>
              <p className="text-gray-600">July 16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gsap;
