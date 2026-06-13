'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const TOTAL_FRAMES = 300;
const FRAME_PREFIX = 'ezgif-frame-';

interface SequenceScrollProps {
  onScrollProgress?: (progress: number) => void;
}

export function SequenceScroll({ onScrollProgress }: SequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollY } = useScroll();
  const containerHeight = typeof window !== 'undefined' ? window.innerHeight * 4 : 0;

  // Load all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/my-portofolio/sequence/${FRAME_PREFIX}${frameNum}.jpg`;

      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };

      img.onerror = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Transform scroll to frame index
  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      if (containerHeight === 0) return;

      const scrollProgress = Math.min(y / containerHeight, 1);
      const frameIndex = Math.floor(scrollProgress * (TOTAL_FRAMES - 1));

      setCurrentFrame(frameIndex);
      onScrollProgress?.(scrollProgress);
    });

    return () => unsubscribe();
  }, [scrollY, containerHeight, onScrollProgress]);

  // Function to draw a frame on canvas
  const drawFrameOnCanvas = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIndex]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img.complete || img.naturalWidth === 0) return; // Image not loaded yet

    // Set canvas size to match container
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Calculate dimensions maintaining aspect ratio
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgAspect > canvasAspect) {
        drawWidth = canvas.height * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgAspect;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      // Clear canvas
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  // Draw current frame on canvas
  useEffect(() => {
    drawFrameOnCanvas(currentFrame);
  }, [currentFrame]);

  // Draw initial frame when first image is loaded
  useEffect(() => {
    if (imagesLoaded > 0) {
      drawFrameOnCanvas(0);
    }
  }, [imagesLoaded]);

  // Handle window resize to redraw canvas
  useEffect(() => {
    const handleResize = () => {
      drawFrameOnCanvas(currentFrame);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full bg-black overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: 'block' }}
        />

        {/* Text Overlays */}
        <TextOverlays currentFrame={currentFrame} totalFrames={TOTAL_FRAMES} />
      </div>
    </div>
  );
}

function TextOverlays({
  currentFrame,
  totalFrames,
}: {
  currentFrame: number;
  totalFrames: number;
}) {
  const progress = currentFrame / totalFrames;

  // Calculate opacity for different sections
  const heroOpacity = Math.max(0, 1 - progress * 5); // 0-20%
  const philosophyOpacity = Math.max(0, Math.min(1, (progress - 0.2) * 5)); // 20-40%
  const philosophyExitOpacity = Math.max(0, 1 - (progress - 0.3) * 5); // 30-50%
  const expertiseOpacity = Math.max(0, Math.min(1, (progress - 0.5) * 5)); // 50-70%
  const ctaOpacity = Math.max(0, Math.min(1, (progress - 0.75) * 5)); // 75-95%

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Hero Section - 0-20% */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
        style={{ opacity: heroOpacity }}
      >
        <motion.h1
          className="hero-text mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Andika Bratadirja
        </motion.h1>
        <motion.p
          className="subtext max-w-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer | Frontend Developer | UI/UX Enthusiast
        </motion.p>
      </motion.div>

      {/* Philosophy Section - 30-50% */}
      <motion.div
        className="absolute inset-0 flex items-center pl-8 md:pl-16 pointer-events-auto"
        style={{ opacity: philosophyOpacity * philosophyExitOpacity }}
      >
        <div className="max-w-2xl">
          <motion.h2
            className="section-text mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where Pixel-Perfect Design Meets Scalable Code
          </motion.h2>
          <motion.p
            className="text-gray-200 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting digital experiences that blend aesthetic excellence with robust engineering.
          </motion.p>
        </div>
      </motion.div>

      {/* Expertise Section - 60-80% */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-auto"
        style={{ opacity: expertiseOpacity }}
      >
        <div className="max-w-2xl text-right">
          <motion.h2
            className="section-text mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Optimized for Speed. Built for Scale.
          </motion.h2>
          <motion.p
            className="text-gray-200 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Performance, accessibility, and user experience at every level.
          </motion.p>
        </div>
      </motion.div>

      {/* CTA Section - 85-100% */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
        style={{ opacity: ctaOpacity }}
      >
        <motion.h2
          className="section-text mb-8 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Build Something Great
        </motion.h2>
        <motion.button
          className="glow-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </div>
  );
}
