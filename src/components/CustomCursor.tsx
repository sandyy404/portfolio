import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run custom cursor on larger desktop screens
    if (window.innerWidth < 1024) return;
    document.body.classList.add('custom-cursor');

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Radial Mouse Spotlight light */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 102, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Main Cursor Glowing Ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/60 shadow-[0_0_15px_#00F0FF] transition-transform duration-100 ease-out hidden lg:block ${
          isHovered ? 'scale-150 bg-cyan-500/20 border-cyan-300' : 'scale-100'
        }`}
        style={{
          width: isHovered ? '36px' : '24px',
          height: isHovered ? '36px' : '24px',
          transform: `translate3d(${position.x - (isHovered ? 18 : 12)}px, ${
            position.y - (isHovered ? 18 : 12)
          }px, 0)`,
        }}
      />

      {/* Center Micro Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] hidden lg:block"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </>
  );
};
