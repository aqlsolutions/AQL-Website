"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseX: number;
    baseY: number;
}

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const mouse = { x: -1000, y: -1000 };

        // Exact Brain SVG path
        const brainPathData = "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z";

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];

            // Create an offscreen canvas to render the brain path and extract pixel data
            const offCanvas = document.createElement("canvas");
            const offCtx = offCanvas.getContext("2d");
            if (!offCtx) return;

            const pathWidth = 576;
            const pathHeight = 512;
            offCanvas.width = pathWidth;
            offCanvas.height = pathHeight;

            const path = new Path2D(brainPathData);

            // Fill softly inside
            offCtx.fillStyle = "rgba(255, 255, 255, 0.2)";
            offCtx.fill(path);

            // Draw thick solid stroke to heavily map the outline edges
            offCtx.lineWidth = 12;
            offCtx.strokeStyle = "rgba(255, 255, 255, 1)";
            offCtx.stroke(path);

            const imageData = offCtx.getImageData(0, 0, pathWidth, pathHeight).data;
            const edgePoints: { x: number, y: number }[] = [];
            const fillPoints: { x: number, y: number }[] = [];

            // Sample the image data
            for (let y = 0; y < pathHeight; y += 5) {
                for (let x = 0; x < pathWidth; x += 5) {
                    const index = (y * pathWidth + x) * 4;
                    const alpha = imageData[index + 3];
                    if (alpha > 200) {
                        edgePoints.push({ x, y });
                    } else if (alpha > 20) {
                        fillPoints.push({ x, y });
                    }
                }
            }

            // Target particle amounts
            const numEdgeParticles = Math.min(window.innerWidth / 4, 300); // Dense on outline
            const numFillParticles = Math.min(window.innerWidth / 8, 150);  // Sparse inside

            const scale = Math.min(canvas.width / pathWidth * 0.6, canvas.height / pathHeight * 0.6);
            const offsetX = (canvas.width - pathWidth * scale) / 2;
            const offsetY = (canvas.height - pathHeight * scale) / 2;

            const spawnParticles = (pointsArray: { x: number, y: number }[], targetCount: number) => {
                if (pointsArray.length === 0) return;
                for (let i = 0; i < targetCount; i++) {
                    const pt = pointsArray[Math.floor(Math.random() * pointsArray.length)];
                    const bx = offsetX + pt.x * scale;
                    const by = offsetY + pt.y * scale;

                    particles.push({
                        x: bx + (Math.random() - 0.5) * 40,
                        y: by + (Math.random() - 0.5) * 40,
                        vx: (Math.random() - 0.5) * 0.2,
                        vy: (Math.random() - 0.5) * 0.2,
                        radius: Math.random() * 1.5 + 0.5,
                        baseX: bx,
                        baseY: by,
                    });
                }
            };

            spawnParticles(edgePoints, numEdgeParticles);
            spawnParticles(fillPoints, numFillParticles);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(200, 200, 200, 0.6)";

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Mouse evasion
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < 150 && distMouse > 0) {
                    const force = (150 - distMouse) / 150;
                    p.vx -= (dxMouse / distMouse) * force * 3;
                    p.vy -= (dyMouse / distMouse) * force * 3;
                }

                // Spring force towards base, but base "breathes"
                const time = Date.now() * 0.001; // Time in seconds
                // Create a slow, subtle offset so the particle base wanders
                const breathOffset = 5;
                // use particle's base coordinates as a pseudo-random seed offset so they don't move in sync
                const targetX = p.baseX + Math.sin(time + p.baseX * 0.01) * breathOffset;
                const targetY = p.baseY + Math.cos(time + p.baseY * 0.01) * breathOffset;

                const dxBase = targetX - p.x;
                const dyBase = targetY - p.y;

                // Add velocity towards the target position
                p.vx += dxBase * 0.08;
                p.vy += dyBase * 0.08;

                // Damping to prevent infinite oscillation
                p.vx *= 0.75;
                p.vy *= 0.75;

                p.x += p.vx;
                p.y += p.vy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = dx * dx + dy * dy;

                    if (dist < 6000) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 0.3 * (1 - dist / 6000);
                        ctx.strokeStyle = `rgba(200, 200, 200, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            // Eject mouse coordinates out of canvas so particles return to base points instantly
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Re-initialize particles when the theme changes so the colors update
    useEffect(() => {
        const event = new Event("resize");
        window.dispatchEvent(event);
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full block pointer-events-none transition-all duration-300 ${isDark ? "opacity-50" : "invert opacity-60"}`}
        />
    );
}
