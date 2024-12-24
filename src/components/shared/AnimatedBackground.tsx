'use client';

import { useEffect, useRef } from 'react';

type AnimatedBackgroundProps = {
  variant: 'gradient' | 'solid';
  opacity: string;
  showFloatingElements: boolean;
};

export function AnimatedBackground({ variant, opacity, showFloatingElements }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !showFloatingElements) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Create floating elements
    const elements = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        // Update position
        element.x += element.speedX;
        element.y += element.speedY;

        // Wrap around edges
        if (element.x < 0) element.x = canvas.width;
        if (element.x > canvas.width) element.x = 0;
        if (element.y < 0) element.y = canvas.height;
        if (element.y > canvas.height) element.y = 0;

        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 144, 130, ${element.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [showFloatingElements]);

  return (
    <>
      <div className="absolute inset-0 z-10">
        {variant === 'gradient' ? (
          <div className={`absolute inset-0 bg-gradient-to-br from-sage-green/10 via-dark-bg to-eggplant/10 ${opacity}`} />
        ) : (
          <div className={`absolute inset-0 bg-dark-bg ${opacity}`} />
        )}
      </div>
      {showFloatingElements && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}
    </>
  );
}
