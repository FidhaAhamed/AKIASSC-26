import { useEffect, useRef } from 'react';

class GeometricShape {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight;
    this.size = Math.random() * 60 + 20;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this. rotation = 0;
    this.rotationSpeed = Math.random() * 0.02 - 0.01;
    this.opacity = Math.random() * 0.3 + 0.1;
    this.type = Math.floor(Math.random() * 3);
    this.color = Math.random() > 0.5 ? '#d4af37' : '#f4e5a0';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.x > this.canvasWidth + 100) this.x = -100;
    if (this. x < -100) this.x = this.canvasWidth + 100;
    if (this.y > this.canvasHeight + 100) this.y = -100;
    if (this.y < -100) this.y = this.canvasHeight + 100;

    this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.005;
    this.opacity = Math.max(0.05, Math.min(0.4, this.opacity));
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity * 0.1;

    if (this.type === 0) {
      ctx.beginPath();
      ctx.moveTo(0, -this.size / 2);
      ctx.lineTo(-this.size / 2, this.size / 2);
      ctx.lineTo(this.size / 2, this.size / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (this.type === 1) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * (this.size / 2);
        const y = Math.sin(angle) * (this.size / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -this.size / 2);
      ctx.lineTo(this.size / 2, 0);
      ctx.lineTo(0, this.size / 2);
      ctx.lineTo(-this.size / 2, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  }
}

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas. getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window. innerHeight;

    const shapeCount = 25;
    shapesRef.current = [];

    for (let i = 0; i < shapeCount; i++) {
      shapesRef.current.push(new GeometricShape(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape) => {
        shape.update();
        shape.draw(ctx);
      });

      for (let i = 0; i < shapesRef.current.length; i++) {
        for (let j = i + 1; j < shapesRef.current.length; j++) {
          const dx = shapesRef.current[i].x - shapesRef.current[j].x;
          const dy = shapesRef.current[i].y - shapesRef. current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const avgOpacity =
              (shapesRef.current[i].opacity + shapesRef.current[j].opacity) / 2;
            ctx.strokeStyle = `rgba(212, 175, 55, ${avgOpacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(shapesRef.current[i].x, shapesRef.current[i].y);
            ctx.lineTo(shapesRef.current[j].x, shapesRef. current[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-[1] pointer-events-none"
    />
  );
};

export default ParticlesBackground;