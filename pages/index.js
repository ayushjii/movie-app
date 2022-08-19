import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Dashboard } from "../Components/Dashboard";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          THREE,
          // color: 0xe94560,
          // backgroundColor: 0x15173c,
          size: 1.8,
          maxDistance: 25.0,
          color: 0xff1e69,
          backgroundColor: 0x3a2861,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory;
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="absolute top-0 right-0 bottom-0 left-0 h-full overflow-hidden w-full m-auto -z-10"
        ref={vantaRef}
      ><Dashboard /></main>
    </div>
  );
}
