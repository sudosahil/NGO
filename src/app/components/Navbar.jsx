'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';



const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
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
                        <Image
                            src="/images/logo.png"
                            alt="Earthen Routes Logo"
                            width={140}
                            height={140}
                            className={styles.logoImage}
                            priority
                        />
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
                    <li className={styles.mobileCtaWrapper}>
                        <Link
                            href="/get-involved"
                            className={`btn btn-moss ${styles.mobileCta}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            Volunteer Now
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
