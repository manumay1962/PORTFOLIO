"use client";

import { useEffect, useRef, useCallback } from "react";

class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.radius = Math.random() * 18 + 6;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.baseRadius = this.radius;
    this.targetRadius = this.radius;

    // Depth simulation (z-axis)
    this.z = Math.random();
    this.targetZ = this.z;

    // Color variations in the orange spectrum
    const hue = 15 + Math.random() * 25; // 15-40 (orange range)
    const sat = 80 + Math.random() * 20;
    const light = 45 + Math.random() * 25;
    this.color = `hsl(${hue}, ${sat}%, ${light}%)`;
    this.glowColor = `hsla(${hue}, ${sat}%, ${light}%, 0.3)`;
    this.shadowColor = `hsla(${hue}, 100%, 50%, 0.15)`;

    // Opacity based on depth
    this.opacity = 0.15 + this.z * 0.6;
    this.targetOpacity = this.opacity;

    // Physics
    this.friction = 0.98;
    this.springBack = 0.02;
    this.originalX = this.x;
    this.originalY = this.y;

    // Floating motion
    this.floatPhase = Math.random() * Math.PI * 2;
    this.floatSpeed = 0.005 + Math.random() * 0.01;
    this.floatAmplitude = 15 + Math.random() * 25;
  }

  update(mouse, deltaTime) {
    // Natural floating motion
    this.floatPhase += this.floatSpeed;
    const floatX = Math.sin(this.floatPhase) * this.floatAmplitude * 0.3;
    const floatY = Math.cos(this.floatPhase * 0.7) * this.floatAmplitude * 0.5;

    // Mouse repulsion
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 180;

      if (dist < repelRadius) {
        const force = (1 - dist / repelRadius) * 8;
        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * force;
        this.vy += Math.sin(angle) * force;

        // Scale up when near cursor
        this.targetRadius = this.baseRadius * 1.4;
        this.targetOpacity = Math.min(1, this.opacity + 0.3);
        this.targetZ = Math.min(1, this.z + 0.3);
      } else {
        this.targetRadius = this.baseRadius;
        this.targetOpacity = 0.15 + this.z * 0.6;
        this.targetZ = this.z;
      }
    }

    // Apply velocity with friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    // Gentle drift back toward a wandering center
    this.originalX += floatX * 0.01;
    this.originalY += floatY * 0.01;

    // Keep original positions within canvas
    this.originalX = Math.max(30, Math.min(this.canvas.width - 30, this.originalX));
    this.originalY = Math.max(30, Math.min(this.canvas.height - 30, this.originalY));

    // Spring back to original area (gentle)
    const pullX = (this.originalX + floatX - this.x) * this.springBack;
    const pullY = (this.originalY + floatY - this.y) * this.springBack;
    this.vx += pullX;
    this.vy += pullY;

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Smooth radius interpolation
    this.radius += (this.targetRadius - this.radius) * 0.08;

    // Smooth opacity interpolation
    const currentOpacity = this.targetOpacity;
    this.opacity += (currentOpacity - this.opacity) * 0.05;

    // Boundary bounce with damping
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.vx *= -0.6;
    }
    if (this.x + this.radius > this.canvas.width) {
      this.x = this.canvas.width - this.radius;
      this.vx *= -0.6;
    }
    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.vy *= -0.6;
    }
    if (this.y + this.radius > this.canvas.height) {
      this.y = this.canvas.height - this.radius;
      this.vy *= -0.6;
    }
  }

  draw(ctx) {
    ctx.save();

    // 3D-like shadow
    const shadowOffset = (1 - this.z) * 8;
    ctx.beginPath();
    ctx.arc(this.x + shadowOffset, this.y + shadowOffset, this.radius * 0.9, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.15})`;
    ctx.fill();

    // Main ball with gradient for 3D effect
    const gradient = ctx.createRadialGradient(
      this.x - this.radius * 0.3,
      this.y - this.radius * 0.3,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius
    );

    const alpha = this.opacity;
    gradient.addColorStop(0, this.color.replace(")", `, ${Math.min(1, alpha + 0.3)})`).replace("hsl", "hsla"));
    gradient.addColorStop(0.5, this.color.replace(")", `, ${alpha})`).replace("hsl", "hsla"));
    gradient.addColorStop(1, this.color.replace(")", `, ${alpha * 0.3})`).replace("hsl", "hsla"));

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Inner highlight (3D specular)
    const highlightGradient = ctx.createRadialGradient(
      this.x - this.radius * 0.25,
      this.y - this.radius * 0.35,
      0,
      this.x - this.radius * 0.25,
      this.y - this.radius * 0.35,
      this.radius * 0.6
    );
    highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.5})`);
    highlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = highlightGradient;
    ctx.fill();

    // Outer glow
    if (this.radius > this.baseRadius * 1.1) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 1.8, 0, Math.PI * 2);
      const glowGrad = ctx.createRadialGradient(
        this.x, this.y, this.radius * 0.5,
        this.x, this.y, this.radius * 1.8
      );
      glowGrad.addColorStop(0, `rgba(255, 107, 43, ${alpha * 0.15})`);
      glowGrad.addColorStop(1, `rgba(255, 107, 43, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.fill();
    }

    ctx.restore();
  }
}

export default function InteractiveBalls() {
  const canvasRef = useRef(null);
  const ballsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);

  const initBalls = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const count = Math.min(20, Math.floor((canvas.width * canvas.height) / 45000));
    ballsRef.current = [];
    for (let i = 0; i < count; i++) {
      ballsRef.current.push(new Ball(canvas));
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const container = canvas.parentElement;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      canvas._logicWidth = rect.width;
      canvas._logicHeight = rect.height;

      if (ballsRef.current.length === 0) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        initBalls();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    resize();

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      ballsRef.current.forEach((ball) => {
        ball.canvas = { width: rect.width, height: rect.height };
      });
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = (time) => {
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update all
      ballsRef.current.forEach((ball) => {
        ball.canvas = { width: rect.width, height: rect.height };
        ball.update(mouseRef.current, dt);
      });

      // Draw connections (simplified - no sort needed)
      const balls = ballsRef.current;
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const dx = balls[j].x - balls[i].x;
          const dy = balls[j].y - balls[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.strokeStyle = `rgba(255, 107, 43, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw all balls
      ballsRef.current.forEach((ball) => ball.draw(ctx));

      animFrameRef.current = requestAnimationFrame(animate);
    };

    // Init after mount
    const rect2 = container.getBoundingClientRect();
    const fakeCvs = { width: rect2.width, height: rect2.height };
    for (let i = 0; i < Math.min(20, Math.floor((rect2.width * rect2.height) / 45000)); i++) {
      ballsRef.current.push(new Ball(fakeCvs));
    }

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initBalls]);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-balls-canvas"
      aria-hidden="true"
    />
  );
}
