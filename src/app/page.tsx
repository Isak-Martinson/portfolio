'use client';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import WritingAnimation from './components/animation/WritingAnimation';
import CanvasComponent from './components/canvas/CanvasComponent';
import ClearButton from './components/button/ClearButton';
import ThumbnailComponent from './components/thumbnail/ThumbnailComponent';
import { data } from '../../data';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSvg, setShowSVG] = useState(true);
  const [clearCanvas, setClearCanvas] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);
  const [hover, setHover] = useState(false);
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    setIsLoading(false);
    console.log('finnished loading - useEffect1');
  }, []);

  const handleClearCanvas = () => {
    setClearCanvas(true);
    setShowSVG(false);
  };

  const handleCanvasCleared = () => {
    setClearCanvas(false);
    setShowSVG(false);
  };

  const handleAnimationLoaded = () => {
    setAnimationEnd(true);
  };

  const handleHover = (imageUrl: string) => {
    setHover(true);
    setThumbnail(imageUrl);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <main className={styles.main}>
      <section className={styles.headerSection}>
        <div>
          <h1 className={styles.h1}>Isak Martinson</h1>
          <hr className={styles.hr} />
          <p className={styles.p}>
            Developer & <br />
            Digital Designer
          </p>
        </div>
        {animationEnd ? <ClearButton onClick={handleClearCanvas} /> : null}
      </section>

      {!isLoading && showSvg ? (
        <WritingAnimation onLoad={handleAnimationLoaded} />
      ) : null}

      {hover && thumbnail !== '' ? (
        <ThumbnailComponent image={thumbnail} />
      ) : null}

      <section className={styles.caseSection}>
        <ul className={styles.ul}>
          {data.map((info) => (
            <Link key={info.id} href={`/${info.id}`}>
              <li
                onMouseOver={() => handleHover(info.imageUrl)}
                onMouseOut={() => handleMouseOut()}
              >
                {info.case}
              </li>
            </Link>
          ))}
        </ul>

        <ul id={styles.socialMedia}>
          <a href=''>
            <li>E-Mail</li>
          </a>
          <li>Github</li>
        </ul>
      </section>
      <CanvasComponent
        clear={clearCanvas}
        onCanvasCleared={handleCanvasCleared}
      />
    </main>
  );
}
