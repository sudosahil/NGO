'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children in a .reveal container that animates on viewport entry.
 * Animations RESET when scrolling back up (element leaves viewport).
 */
export default function ScrollReveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, delay);
                } else {
                    // Reset when element leaves viewport
                    el.classList.remove('visible');
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}
