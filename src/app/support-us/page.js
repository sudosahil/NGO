import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
    title: 'Support Us — Earthen Routes',
    description: 'Support Earthen Routes — sponsor the farm, donate supplies, or spread the word to help feed paediatric cancer patients.',
};

export default function SupportUsPage() {
    return (
        <>
            <section className={styles.supportHero}>
                {/* Background leaf SVG */}
                <div className={styles.leafBg}>
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
                        <path
                            d="M30 170C30 170 50 100 100 70C150 40 180 10 180 10C180 10 160 80 110 120C80 140 50 160 30 170Z"
                            fill="rgba(255,255,255,0.03)"
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="2"
                        />
                        <path d="M30 170C60 130 80 110 110 90" stroke="rgba(255,255,255,0.03)" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                <div className={styles.supportContent}>
                    <ScrollReveal>
                        <span className="dm-mono text-gold" style={{ display: 'block', marginBottom: '1rem', letterSpacing: '0.18em', fontSize: '0.82rem' }}>
                            Make a Difference
                        </span>
                        <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>Support Earthen Routes</h1>
                        <p className={styles.supportSub}>
                            Every contribution — big or small — helps us grow more food for children undergoing cancer
                            treatment. Whether you&rsquo;d like to sponsor the farm, donate supplies, or support a specific
                            initiative, your generosity directly nourishes the children of St. Jude&rsquo;s ChildCare Centre.
                        </p>
                    </ScrollReveal>

                    <div className={styles.supportGrid}>
                        <ScrollReveal>
                            <div className={styles.supportCard}>
                                <span className={styles.supportIcon}>🌾</span>
                                <h3 style={{ color: '#fff' }}>Sponsor the Farm</h3>
                                <p>
                                    Support day-to-day farm operations, seeds, tools, and staff through individual or corporate sponsorships.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className={styles.supportCard}>
                                <span className={styles.supportIcon}>🛠️</span>
                                <h3 style={{ color: '#fff' }}>Donate Supplies</h3>
                                <p>
                                    Contribute gardening tools, organic inputs, saplings, or other farm supplies directly to keep the farm running.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className={styles.supportCard}>
                                <span className={styles.supportIcon}>📢</span>
                                <h3 style={{ color: '#fff' }}>Spread the Word</h3>
                                <p>
                                    Share our story with your network, follow us on social media, and help us reach more people who care about this cause.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal className="text-center">
                        <Link href="/contact" className="btn btn-gold btn-large" style={{ marginTop: '1rem' }}>
                            Get In Touch to Support Us
                        </Link>
                        <p className={styles.emailNote}>earthenroutes@gmail.com</p>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
