'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counter — animates a number from 0 to `target` on viewport entry.
 * Supports string prefixes/suffixes (e.g. "150+" or "30,000").
 */
export default function Counter({ target, suffix = '', prefix = '', duration = 2000 }) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    const [started, setStarted] = useState(false);

    // Parse numeric value from target
    const numericTarget = typeof target === 'number'
        ? target
        : parseInt(String(target).replace(/[^0-9]/g, ''), 10);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const startTime = performance.now();

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.round(easedProgress * numericTarget);

            setValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [started, numericTarget, duration]);

    // Format with commas
    const formatted = value.toLocaleString();

    return (
        <span ref={ref}>
            {prefix}{formatted}{suffix}
        </span>
    );
}
