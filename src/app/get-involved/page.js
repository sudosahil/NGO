import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
    title: 'Get Involved — Earthen Routes',
    description: 'Volunteer, visit, or partner with Earthen Routes — join our community of urban farmers in Navi Mumbai.',
};

export default function GetInvolvedPage() {
    return (
        <>
            <section className="page-hero">
                <span className="label hero-anim-1">Join the Community</span>
                <h1 className="hero-anim-2">Get Involved</h1>
                <p className="hero-anim-3">
                    There are many ways to be part of the Earthen Routes story.
                </p>
            </section>

            {/* ========== SPLIT PANEL ========== */}
            <section className={styles.splitSection}>
                <div className={styles.splitGrid}>
                    {/* Left — Volunteering */}
                    <div className={styles.volunteerPanel}>
                        <ScrollReveal>
                            <span className={`dm-mono ${styles.panelLabel}`}>Volunteer Program</span>
                            <h2 style={{ color: '#fff' }}>Volunteer With Us</h2>
                            <p>
                                Our volunteers are what keep this place going! We welcome people of all genders, age groups and
                                backgrounds to volunteer at our farm. Over the years, we have been warmed to hear that
                                volunteering has offered people a valuable respite, a way to connect with friends, learn about
                                farming and be part of a community.
                            </p>

                            <div className={styles.infoBadge}>
                                <p>📅 &nbsp;SAT – SUN &nbsp;| &nbsp;9:00 AM – 12:00 PM</p>
                                <p>✅ &nbsp;Free of charge &nbsp;· &nbsp;No experience necessary</p>
                            </div>

                            <p className={styles.smallNote}>
                                All volunteering experiences are free. Come along and give it a go!
                                To register: fill in your details or contact earthenroutes@gmail.com
                            </p>

                            <Link href="/contact" className="btn btn-gold">
                                Register as a Volunteer
                            </Link>
                        </ScrollReveal>
                    </div>

                    {/* Right — Group Visits */}
                    <div className={styles.groupPanel}>
                        <ScrollReveal>
                            <span className={`dm-mono ${styles.panelLabelGreen}`}>Group Experiences</span>
                            <h2>Group Visits &amp; Events</h2>
                            <p>
                                As a community farm, we welcome group visits that include informative tours of the farm and fun
                                experiential activities. We also offer packages for small groups and events, including children&rsquo;s
                                birthday parties, school trips and corporate visits.
                            </p>

                            <ul className={styles.leafList}>
                                <li>🌿 Informative guided farm tours</li>
                                <li>🌿 Fun experiential farming activities</li>
                                <li>🌿 Children&rsquo;s birthday parties</li>
                                <li>🌿 School &amp; college trips</li>
                                <li>🌿 Corporate engagement &amp; CSR visits</li>
                            </ul>

                            <p className={styles.smallNoteDark}>
                                If you are interested in our packages, please fill out our booking enquiry form
                                or contact us at earthenroutes@gmail.com
                            </p>

                            <Link href="/contact" className="btn btn-moss-mid">
                                Book a Group Visit
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ========== CORPORATE ENGAGEMENT ========== */}
            <section className="bg-parchment section">
                <div className="container-narrow text-center">
                    <ScrollReveal>
                        <span className="label text-moss">For Organisations</span>
                        <h2>Corporate Engagement</h2>
                        <p style={{ maxWidth: 680, margin: '0 auto 2rem' }}>
                            Looking for a meaningful CSR activity or team-building experience? Earthen Routes offers
                            bespoke corporate engagement programs — from guided farm visits to hands-on workshops —
                            that connect your team with purpose, nature, and community.
                        </p>
                        <Link href="/contact" className="btn btn-moss-mid">
                            Enquire for Corporate Visits
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
