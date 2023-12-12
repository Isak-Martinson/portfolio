import { useEffect, useState, useRef, MouseEvent } from 'react';
import './canvas.css';
import { type } from 'os';

interface CanvasComponentProps {
  clear: boolean;
  onCanvasCleared: () => void;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  clear,
  onCanvasCleared,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<any>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (clear && context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      onCanvasCleared();
    }
  }, [clear, context, onCanvasCleared]);

  const handleStartDrawing = (e: MouseEvent) => {
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLCanvasElement>) => {
    if (context) {
      const touchOffsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      const touchOffsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;
      context.beginPath();
      context.moveTo(touchOffsetX, touchOffsetY);
      setIsDrawing(true);
    }
  };

  const handleDrawing = (e: MouseEvent) => {
    if (!isDrawing) {
      return;
    }
    if (context) {
      context.strokeStyle = '#0000EE';
      context.lineWidth = 1;
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
      setCurrentPath([
        ...currentPath,
        { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
      ]);
    }
  };

  const handleTouchDrawing = (e: TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    if (context) {
      const touchOffsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      const touchOffsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;
      context.strokeStyle = '#0000EE';
      context.lineWidth = 1;
      context.lineTo(touchOffsetX, touchOffsetY);
      context.stroke();
      setCurrentPath([...currentPath, { x: touchOffsetX, y: touchOffsetY }]);
    }
  };

  const handleEndDrawing = () => {
    setIsDrawing(false);
    context && context.closePath();
    setCurrentPath([]);
  };

  return (
    <canvas
      ref={canvasRef}
      className='canvas'
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchDrawing(e)}
      onTouchEnd={handleEndDrawing}
      onTouchCancel={handleEndDrawing}
      onMouseMove={(e) => handleDrawing(e)}
      onMouseDown={(e) => handleStartDrawing(e)}
      onMouseUp={handleEndDrawing}
      onMouseOut={handleEndDrawing}
    />
  );
};

export default CanvasComponent;
