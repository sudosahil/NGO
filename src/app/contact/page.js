'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

const interestOptions = [
    'Volunteering',
    'Group Visit / Event',
    'Workshop Registration',
    'Kitchen Garden Setup',
    'Land Project Consultation',
    'Supporting / Sponsoring the Farm',
    'General Inquiry',
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone') || '';
        const interest = formData.get('interest');
        const message = formData.get('message');

        // Save to localStorage so it appears in the admin dashboard
        const existing = JSON.parse(localStorage.getItem('earthen_leads') || '[]');
        const newLead = {
            id: existing.length ? Math.max(...existing.map((l) => l.id)) + 1 : 1,
            name,
            email,
            phone,
            interest,
            status: 'New',
            date: new Date().toISOString().split('T')[0],
            notes: message,
        };
        localStorage.setItem('earthen_leads', JSON.stringify([...existing, newLead]));

        e.target.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <>
            <section className="page-hero">
                <span className="label hero-anim-1">Get In Touch</span>
                <h1 className="hero-anim-2">Contact Us</h1>
                <p className="hero-anim-3">
                    We&rsquo;d love to hear from you — whether you want to volunteer, visit, or support us.
                </p>
            </section>

            <section className="bg-cream section">
                <div className={`container ${styles.contactGrid}`}>
                    {/* Left — Contact Info */}
                    <div className={styles.infoCol}>
                        <ScrollReveal>
                            <span className="label text-moss">Find Us</span>
                            <h2>Reach Out to Earthen Routes</h2>

                            <div className={styles.contactBlocks}>
                                <div className={styles.contactBlock}>
                                    <span className={styles.blockIcon}>📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:earthenroutes@gmail.com">earthenroutes@gmail.com</a>
                                    </div>
                                </div>

                                <div className={styles.contactBlock}>
                                    <span className={styles.blockIcon}>📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+91892887658">+91 892887658</a>
                                        <p className={styles.muted}>(Founder&rsquo;s direct contact — to be confirmed)</p>
                                    </div>
                                </div>

                                <div className={styles.contactBlock}>
                                    <span className={styles.blockIcon}>📍</span>
                                    <div>
                                        <h4>Address</h4>
                                        <p>
                                            Earthen Routes<br />
                                            TATA ACTREC Hospital,<br />
                                            Behind St. Jude Child Care Centre,<br />
                                            Owe Camp, Kharghar,<br />
                                            Navi Mumbai, Maharashtra 410210
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.contactBlock}>
                                    <span className={styles.blockIcon}>🕘</span>
                                    <div>
                                        <h4>Volunteering Hours</h4>
                                        <p>Saturday – Sunday · 9:00 AM – 12:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Block */}
                            <div className={styles.mapCard}>
                                <span className={styles.mapLabel}>📍 Location</span>
                                <p>Kharghar, Navi Mumbai — Inside TATA ACTREC campus</p>
                                <a
                                    href="https://maps.google.com/?q=TATA+ACTREC+Kharghar+Navi+Mumbai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapLink}
                                >
                                    Open in Google Maps →
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className={styles.socialLinks}>
                                <span className="dm-mono" style={{ color: 'var(--soil-light)', fontSize: '0.72rem' }}>
                                    Follow Us:
                                </span>
                                <span className={styles.socialLabel}>Instagram</span>
                                <span className={styles.socialLabel}>Facebook</span>
                                <span className={styles.socialLabel}>WhatsApp</span>
                                <span className={styles.muted} style={{ fontSize: '0.72rem' }}>(Links to be updated)</span>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right — Contact Form */}
                    <div className={styles.formCol}>
                        <ScrollReveal>
                            <div className={styles.formCard}>
                                <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>

                                {submitted ? (
                                    <div className={styles.successMsg}>
                                        <span>🌱</span>
                                        <p>Thank you! Your message has been sent. We&rsquo;ll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" id="name" name="name" required placeholder="Enter your name" />
                                        </div>

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" required placeholder="Enter your email" />
                                        </div>

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                                        </div>

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="interest">I&rsquo;m Interested In…</label>
                                            <select id="interest" name="interest" required defaultValue="">
                                                <option value="" disabled>Select an option</option>
                                                {interestOptions.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={styles.fieldGroup}>
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" name="message" rows={5} required placeholder="Write your message…"></textarea>
                                        </div>

                                        <button type="submit" className={`btn btn-moss btn-full ${styles.submitBtn}`}>
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
}
