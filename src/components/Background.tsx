import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;

        const particlesArray: Particle[] = [];
        const numberOfParticles = 200;

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            parallax: number;
            velocityX: number;
            velocityY: number;

            constructor(x: number, y: number, size: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.baseX = x;
                this.baseY = y;
                this.parallax = Math.random() * 0.2 + 0.1;
                this.velocityX = (Math.random() - 0.5) * 0.2;
                this.velocityY = (Math.random() - 0.5) * 0.2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;

                // Reverse direction if out of bounds
                if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
            }
        }

        function init() {
            particlesArray.length = 0;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * (document.body.scrollHeight + window.innerHeight) - window.innerHeight / 2; // Random y position including above the viewport
                particlesArray.push(new Particle(x, y, size));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        function handleScroll() {
            const scrollY = window.scrollY;
            particlesArray.forEach(particle => {
                particle.y = particle.baseY + scrollY * particle.parallax;
            });
        }

        function smoothScroll() {
            handleScroll();
            requestAnimationFrame(smoothScroll);
        }

        init();
        animate();
        smoothScroll();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
            init();
        });

    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }} />;
};

export default Background;