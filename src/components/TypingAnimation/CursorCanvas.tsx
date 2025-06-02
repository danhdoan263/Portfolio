import React, { useEffect, useRef } from "react";

const CursorCanvas: React.FC<{ show: boolean }> = ({ show }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (show && Date.now() % 1000 < 500) {
        ctx.fillStyle = "currentColor";
        ctx.fillRect(0, 0, 2, canvas.height);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [show]);

  return (
    <canvas
      ref={canvasRef}
      width={2}
      height={20}
      style={{
        display: "inline-block",
        marginLeft: "2px",
        verticalAlign: "baseline",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorCanvas;
