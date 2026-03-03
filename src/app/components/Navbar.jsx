'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

/**
 * Leaf SVG icon for the logo
 */
function LeafIcon() {
    return (
        <svg
            className={styles.leafIcon}
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 26C6 26 8 18 16 14C24 10 28 4 28 4C28 4 26 12 18 18C14 20.5 10 24 6 26Z"
                fill="var(--moss-deep)"
                stroke="var(--moss-mid)"
                strokeWidth="1.2"
            />
            <path
                d="M6 26C10 20 14 17 18 14"
                stroke="var(--moss-mid)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M14 18C12 20 10 22 8 24"
                stroke="var(--moss-light)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M20 12C18 15 16 17 14 19"
                stroke="var(--moss-light)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Support Us', href: '/support-us' },
    { label: 'Media & Blog', href: '/media' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <LeafIcon />
                        <span>Earthen Routes</span>
                    </Link>

                    <ul className={styles.links}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? styles.active : ''}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link href="/get-involved" className={`btn btn-moss ${styles.cta}`}>
                        Volunteer Now
                    </Link>

                    <button
                        className={styles.hamburger}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={mobileOpen ? styles.hamOpen : ''}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileShow : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={pathname === link.href ? styles.mobileActive : ''}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
