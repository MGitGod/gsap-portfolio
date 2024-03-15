"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Trigger() {
  //   useEffect(() => {
  //     const listWrapperEl = document.querySelector(".side-scroll-list-wrapper");
  //     const listEl = document.querySelector(".side-scroll-list");

  //     if (!listWrapperEl || !listEl) return;

  //     gsap.to(listEl, {
  //       x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".side-scroll",
  //         start: "top top", // 要素の上端（top）が、ビューポートの上端（top）にきた時
  //         end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
  //         scrub: 1,
  //         pin: true,
  //         markers: true,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //       },
  //     });

  //     return () => {};
  //   }, []);

  useLayoutEffect(() => {
    const listWrapperEl = document.querySelector(".side-scroll-list-wrapper");
    const listEl = document.querySelector(".side-scroll-list");

    if (!listWrapperEl || !listEl) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: ".side-scroll",
      pin: true,
      start: "top top",
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    });

    let tl = gsap.timeline();

    tl.to(listEl, {
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: true,
        markers: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div>
      <h1 className="title">GSAP Scroll Practice</h1>
      <section className="normal section">
        <div className="container">
          <h2 className="normal-heading heading">普通のセクション</h2>
          <p className="normal-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            quasi quibusdam. Distinctio sint repellat architecto officia
            doloremque dicta explicabo repellendus voluptates molestiae itaque
            aspernatur minus, consequuntur vero eligendi suscipit accusantium.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, qui
            aliquam sunt ad explicabo nam suscipit quod adipisci, reprehenderit,
            dolorem pariatur laboriosam ea repellendus? Repudiandae fugit nihil
            exercitationem expedita quae?
          </p>
        </div>
      </section>

      <section className="side-scroll section">
        <div className="side-scroll-container container">
          <h2 className="side-scroll-heading heading">
            横にスクロールするセクション
          </h2>
          <div className="side-scroll-list-wrapper">
            <ul className="side-scroll-list">
              <li className="side-scroll-item">Card</li>
              <li className="side-scroll-item">Card</li>
              <li className="side-scroll-item">Card</li>
              <li className="side-scroll-item">Card</li>
              <li className="side-scroll-item">Card</li>
              <li className="side-scroll-item">Card</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="normal section">
        <div className="container">
          <h2 className="normal-heading heading">普通のセクション</h2>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            inventore magni sit laboriosam modi veniam, quisquam ea. Id
            provident nobis magnam, quibusdam, impedit ducimus fuga odio,
            tempore iste optio illo! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Modi beatae totam at, voluptate quidem enim odio,
            perspiciatis vero aut sed delectus ea quam! Odio, excepturi
            laboriosam error possimus eius quasi!
          </p>
        </div>
      </section>
    </div>
  );
}
