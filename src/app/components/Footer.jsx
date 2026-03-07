import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Support Us', href: '/support-us' },
    { label: 'Media & Blog', href: '/media' },
    { label: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.inner}>
                    {/* Left — Logo & Tagline */}
                    <div className={styles.col}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="Earthen Routes Logo"
                                width={56}
                                height={56}
                                className={styles.logoImage}
                            />
                            <span>Earthen Routes</span>
                        </Link>
                        <p className={styles.tagline}>
                            <em>&ldquo;Enriching Urban Communities, one organic plant at a time.&rdquo;</em>
                        </p>
                    </div>

                    {/* Centre — Quick Nav */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Quick Links</h4>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Contact Snippet */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <a href="mailto:earthenroutes@gmail.com">earthenroutes@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:+91892887658">+91 892887658</a>
                            </li>
                            <li>Kharghar, Navi Mumbai</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottom}>
                <div className={styles.inner}>
                    <p>
                        © 2024 Earthen Routes. All Rights Reserved. | Made with 🌱 in Navi Mumbai
                        <span style={{ margin: '0 0.5rem' }}>·</span>
                        <Link href="/admin" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.06em', fontFamily: 'var(--font-dm-mono)' }}>
                            Admin
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
