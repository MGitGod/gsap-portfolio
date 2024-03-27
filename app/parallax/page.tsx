"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./parallax.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cx from 'classnames';

gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
  // セレクタ ".js-trigger" で要素を取得
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.js-parallax').forEach(wrap => {
      const y = wrap.getAttribute('data-y') || -100;
      gsap.to(wrap, {
        y: y,
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
          //markers: true
        }
      });
    });
  },[])

return (
    <main className={styles.base}>
    <div className={styles.space}>
    <h1>GSAP ScrollTrigger Parallax</h1>
  </div>

  <div className={styles.separate}>
    <Image className="js-parallax" src="https://source.unsplash.com/random" alt="" data-y="-20vw" width={400} height={300} />
  </div>

  <div className={styles.content}>
    <div className={styles.item}>
      <div className={cx(styles.image, styles['js-parallax'])}>
        <Image src="https://source.unsplash.com/random" alt="" width={400} height={300} />
      </div>
      <div className={cx(styles.text, styles['js-parallax'])} data-y="-50">
        <p>Fashion</p>
      </div>
    </div>

    <div className={styles.item}>
      <div className={cx(styles.image, styles['js-parallax'])}>
        <Image src="https://source.unsplash.com/random" alt="" width={400} height={300} />
      </div>
      <div className={cx(styles.text, styles['js-parallax'])} data-y="-50">
        <p>Nature</p>
      </div>
    </div>

    <div className={styles.item}>
      <div className={cx(styles.image, styles['js-parallax'])} data-y="-100">
        <Image src="https://source.unsplash.com/random" alt="" width={400} height={300} />
      </div>
      <div className={cx(styles.text, styles['js-parallax'])} data-y="-50">
        <p>Fashion</p>
      </div>
    </div>
  </div>

  <div className={styles.separate}>
    <Image className="js-parallax" data-y="-20vw" src="https://source.unsplash.com/random" alt="" width={400} height={300} />
  </div>

  <div className={styles.space}>END</div>
  </main>
  );
}
