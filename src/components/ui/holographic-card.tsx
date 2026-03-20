import React, { useRef } from 'react';

interface HolographicCardProps {
    children: React.ReactNode;
    className?: string;
}

const HolographicCard = ({ children, className }: HolographicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 25; 
        const rotateY = (centerX - x) / 25;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={`holographic-card relative transition-transform duration-200 ease-out ${className}`} 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
            <div className="holo-glow pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default HolographicCard;
