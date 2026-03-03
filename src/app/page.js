import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import Counter from './components/Counter';
import styles from './page.module.css';

export const metadata = {
    title: 'Home — Earthen Routes',
    description: 'Earthen Routes is a community farm growing 100% organic food for paediatric cancer patients at TATA ACTREC Hospital, Kharghar, Navi Mumbai.',
};

export default function HomePage() {
    return (
        <>
            {/* ========== HERO ========== */}
            <section className={styles.hero}>
                <div className={styles.heroPattern}></div>
                <div className={styles.heroContent}>
                    <h1 className="hero-anim-1">
                        Enriching Urban Communities through Organic Farming and Sustainable Practices
                    </h1>
                    <p className={`hero-anim-2 ${styles.heroSub}`}>
                        A community farm and social project nestled inside TATA ACTREC Hospital,
                        growing organic food for paediatric cancer patients at St. Jude&rsquo;s ChildCare Centre —
                        powered entirely by volunteers, love, and the belief that healing begins with the earth.
                    </p>
                    <p className={`hero-anim-4 ${styles.heroQuote}`}>
                        &ldquo;Start Where you are. Use what you have. Do what you can.&rdquo; — Arthur Ashe
                    </p>
                    <div className={`hero-anim-5 ${styles.heroCtas}`}>
                        <Link href="/get-involved" className="btn btn-gold">Volunteer</Link>
                        <Link href="/support-us" className="btn btn-outline-white">Support Us</Link>
                        <Link href="/what-we-do" className="btn btn-outline-moss">Explore Our Work</Link>
                    </div>
                    <div className={`hero-anim-6 ${styles.scrollHint}`}>
                        <span className={styles.chevron}>⌄</span>
                        <span>Scroll to explore</span>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT INTRO STRIP ========== */}
            <section className={`${styles.aboutStrip} bg-parchment section`}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <ScrollReveal className={styles.aboutText}>
                            <span className="label text-moss">Who We Are</span>
                            <h2>Welcome to Earthen Routes</h2>
                            <p>
                                Earthen Routes is a farm and social project that aims to build a sustainable, organic community.
                                Our mission is to provide nourishing food to the paediatric patients of St Jude&rsquo;s ChildCare Centre
                                at the TATA Advanced Centre for Treatment, Research &amp; Education in Cancer (ACTREC) in
                                Kharghar, Navi Mumbai.
                            </p>
                            <p>
                                We invite you to explore our beautiful farm, participate in workshops and volunteering sessions,
                                and experience the benefits of being close to nature. We also offer consultations for kitchen-garden
                                setups and urban land projects.
                            </p>
                            <p>
                                Join us in our mission to Enrich Urban Communities, one organic plant at a time!
                            </p>
                            <Link href="/about" className="btn btn-moss-mid" style={{ marginTop: '1.5rem' }}>
                                Our Full Story
                            </Link>
                        </ScrollReveal>

                        {/* CSS Farm Illustration */}
                        <ScrollReveal delay={200}>
                            <div className={styles.farmIllustration}>
                                <div className={styles.farmSky}>
                                    <div className={styles.farmSun}></div>
                                </div>
                                <div className={styles.farmCrops}>
                                    <div className={styles.crop} style={{ height: '55%', background: 'var(--moss-deep)' }}></div>
                                    <div className={styles.crop} style={{ height: '72%', background: 'var(--moss-mid)' }}></div>
                                    <div className={styles.crop} style={{ height: '48%', background: 'var(--moss-light)' }}></div>
                                    <div className={styles.crop} style={{ height: '65%', background: 'var(--sprout)' }}></div>
                                    <div className={styles.crop} style={{ height: '58%', background: 'var(--moss-deep)' }}></div>
                                    <div className={styles.crop} style={{ height: '70%', background: 'var(--moss-mid)' }}></div>
                                    <div className={styles.crop} style={{ height: '45%', background: 'var(--moss-light)' }}></div>
                                    <div className={styles.crop} style={{ height: '62%', background: 'var(--sprout)' }}></div>
                                </div>
                                <div className={styles.farmSoil}></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ========== IMPACT NUMBERS ========== */}
            <section className={`${styles.impact} bg-moss-deep section section-curve-bottom`}>
                <div className="container">
                    <div className="grid-4">
                        {[
                            { target: 1, suffix: ' Acre', label: 'Farm Area' },
                            { target: 30000, suffix: ' sq.ft', label: 'Growing Area' },
                            { target: 50, suffix: '+', label: 'Crop Varieties' },
                            { target: 150, suffix: '+ Tonnes', label: 'Organic Waste Composted' },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={styles.statCard}>
                                    <div className={styles.statNumber}>
                                        <Counter target={item.target} suffix={item.suffix} />
                                    </div>
                                    <div className={styles.statLabel}>{item.label}</div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== SERVICES PREVIEW ========== */}
            <section className="bg-cream section" style={{ paddingTop: '5rem' }}>
                <div className="container">
                    <ScrollReveal className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="label text-moss">What We Offer</span>
                        <h2>Growing More Than Food</h2>
                    </ScrollReveal>

                    <div className="grid-2">
                        {[
                            {
                                icon: '🌾',
                                title: 'Community Farm Project',
                                desc: 'Organic produce for paediatric cancer patients inside TATA ACTREC.',
                            },
                            {
                                icon: '🪴',
                                title: 'Kitchen Garden Setup',
                                desc: '100% organic setups for homes, societies, and corporates.',
                            },
                            {
                                icon: '🌍',
                                title: 'Land Projects',
                                desc: 'End-to-end Permaculture-inspired farm execution for any land type.',
                            },
                            {
                                icon: '🌿',
                                title: 'Workshops',
                                desc: 'Hands-on organic gardening, composting, and microgreens sessions.',
                            },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={`card ${styles.servicePreview}`}>
                                    <span className={styles.serviceIcon}>{item.icon}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal className="text-center" style={{ marginTop: '2.5rem' }}>
                        <Link href="/what-we-do" className="btn btn-moss-mid">
                            See All Our Services
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
