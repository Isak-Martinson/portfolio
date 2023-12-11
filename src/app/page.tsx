'use client';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import WritingAnimation from './components/animation/WritingAnimation';
import CanvasComponent from './components/canvas/CanvasComponent';
import ClearButton from './components/button/ClearButton';
import { data } from '../../data';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSvg, setShowSVG] = useState(true);
  const [clearCanvas, setClearCanvas] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);
  const [info, setInfo] = useState(data);

  useEffect(() => {
    setIsLoading(false);
    console.log('finnished loading');
  }, []);

  const handleClearCanvas = () => {
    console.log('Clear button clicked');
    setClearCanvas(true);
    setShowSVG(false);
  };

  const handleCanvasCleared = () => {
    setClearCanvas(false);
    setShowSVG(false);
    console.log('canvas cleared in canvas component');
  };

  const handleAnimationLoaded = () => {
    setAnimationEnd(true);
    console.log('animation has ended');
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

      <section className={styles.caseSection}>
        <ul className={styles.ul}>
          {info.map((test) => (
            <Link key={test.id} href={`/${test.id}`}>
              {<li>{test.case}</li>}
            </Link>
          ))}
        </ul>

        <ul id={styles.socialMedia}>
          <li>Mail</li>
          <li>Github</li>
          <li>Instagram</li>
        </ul>
      </section>
      <CanvasComponent
        clear={clearCanvas}
        onCanvasCleared={handleCanvasCleared}
      />
    </main>
  );
}
