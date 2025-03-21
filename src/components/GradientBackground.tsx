
import React, { useEffect, useRef } from 'react';

const GradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to fill the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once to initialize
    resizeCanvas();

    // Update on resize
    window.addEventListener('resize', resizeCanvas);

    // Gradient blobs
    class Blob {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 300 + 100;
        this.color = this.getRandomColor();
        this.velocity = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3
        };
        this.opacity = Math.random() * 0.07 + 0.03; // Very subtle
      }

      getRandomColor() {
        const colors = [
          '124, 58, 237', // purple (primary)
          '139, 92, 246', // lighter purple
          '79, 70, 229',  // indigo
          '45, 212, 191', // teal
          '6, 182, 212'   // cyan
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce off edges
        if (this.x < -this.radius || this.x > canvas.width + this.radius) {
          this.velocity.x = -this.velocity.x;
        }
        if (this.y < -this.radius || this.y > canvas.height + this.radius) {
          this.velocity.y = -this.velocity.y;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create blobs
    const blobs: Blob[] = [];
    for (let i = 0; i < 5; i++) {
      blobs.push(new Blob());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10 opacity-80"
      style={{ background: 'linear-gradient(to bottom, rgba(14, 14, 20, 1), rgba(16, 16, 28, 1))' }}
    />
  );
};

export default GradientBackground;
