import ScrollReveal from '../components/ScrollReveal';
import TestimonialCarousel from '../components/TestimonialCarousel';
import styles from './page.module.css';

export const metadata = {
    title: 'Media & Blog — Earthen Routes',
    description: 'Earthen Routes in the press and voices from our community — featured articles and testimonials.',
};

export default function MediaPage() {
    return (
        <>
            <section className="page-hero">
                <span className="label hero-anim-1">Press &amp; Stories</span>
                <h1 className="hero-anim-2">Media &amp; Blog</h1>
                <p className="hero-anim-3">
                    Earthen Routes in the news, and voices from our community.
                </p>
            </section>

            {/* ========== FEATURED ARTICLES ========== */}
            <section className="bg-cream section">
                <div className="container">
                    <ScrollReveal className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="label text-moss">In the Press</span>
                        <h2>Featured Articles</h2>
                    </ScrollReveal>

                    <div className={styles.articlesGrid}>
                        <ScrollReveal>
                            <div className={styles.articleCard} style={{ transform: 'rotate(-1deg)' }}>
                                <div className={styles.tapeStrip}></div>
                                <div className={styles.articleBody}>
                                    <h3>Urban farms offer a fresh perspective on managing kitchen waste and nurturing a community</h3>
                                    <span className={styles.readLink}>Read Article →</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className={styles.articleCard} style={{ transform: 'rotate(0.8deg)' }}>
                                <div className={styles.tapeStrip}></div>
                                <div className={styles.articleBody}>
                                    <h3>Gift economy as an alternative to achieve sustainable development: The case of Earthen Routes</h3>
                                    <span className={styles.readLink}>Read Article →</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal className="text-center" style={{ marginTop: '1.5rem' }}>
                        <p className={styles.updateNote}>
                            <em>Direct article links to be updated</em>
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="bg-moss-deep section">
                <div className="container">
                    <ScrollReveal className="text-center">
                        <span className="dm-mono text-gold" style={{ display: 'block', marginBottom: '0.8rem', letterSpacing: '0.12em', fontSize: '0.82rem' }}>
                            What People Say
                        </span>
                        <h2 style={{ color: '#fff' }}>Voices from Our Community</h2>
                    </ScrollReveal>

                    <TestimonialCarousel />
                </div>
            </section>
        </>
    );
}
