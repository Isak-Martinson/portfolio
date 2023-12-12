import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './thumbnail.module.css';
import vertexShader from '../../shaders/vertexShader.glsl';
import fragmentShader from '../../shaders/fragmentShader.glsl';

interface ThumbnailProps {
  image: string;
}
const ThumbnailComponent: React.FC<ThumbnailProps> = ({ image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('image on thumbnailComponent ', image);
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 1;

      const geometry = new THREE.PlaneGeometry(1, 1, 16, 16);
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0.0 },
          uTexture: {
            value: new THREE.TextureLoader().load(image),
          },
        },
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const clock = new THREE.Clock();

      const addEvents = () => {
        window.requestAnimationFrame(run.bind(this));
        // window.addEventListener("resize", onResize.bind(this), false);
      };

      const run = () => {
        requestAnimationFrame(run.bind(this));
        render();
      };

      const render = () => {
        material.uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      };

      run();
    }
  }, [containerRef, image]);

  return (
    <div
      style={{ zIndex: 2 }}
      className={styles.imageContainer}
      ref={containerRef}
    />
  );
};

export default ThumbnailComponent;
