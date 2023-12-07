'use client';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import WritingAnimation from './components/WritingAnimation';
import CanvasComponent from './components/CanvasComponent';
import ClearButton from './components/ClearButton';
import './page.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSvg, setShowSVG] = useState(true);
  const [clearCanvas, setClearCanvas] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

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
    <main>
      <section className='header-section'>
        <div>
          <h1>Isak Martinson</h1>
          <hr />
          <p>
            Developer & <br />
            Digital Designer
          </p>
        </div>
        {animationEnd ? <ClearButton onClick={handleClearCanvas} /> : null}
      </section>

      {!isLoading && showSvg ? (
        <WritingAnimation onLoad={handleAnimationLoaded} />
      ) : null}

      <section className='case-section'>
        <ul>
          <li>Case 1</li>
          <li>Case 2</li>
          <li>Case 3</li>
        </ul>

        <ul>
          <li>Github</li>
          <li>Instagram</li>
          <li>Mail</li>
        </ul>
      </section>
      <CanvasComponent
        clear={clearCanvas}
        onCanvasCleared={handleCanvasCleared}
      />
    </main>
  );
}
