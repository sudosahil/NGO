import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
    title: 'Meet the Team — Earthen Routes',
    description: 'Meet the passionate people behind Earthen Routes — led by founder Manasvini Tyagi, a permaculture designer with over 14 years of experience.',
};

export default function TeamPage() {
    return (
        <>
            {/* Hero */}
            <section className="page-hero" style={{ padding: '5.5rem 1.5rem 2.5rem' }}>
                <span className="label hero-anim-1">The People</span>
                <h1 className="hero-anim-2">Meet Our Team</h1>
                <p className="hero-anim-3">
                    The passionate minds and hands nurturing communities through organic farming and sustainable practices.
                </p>
            </section>

            {/* Founder Section */}
            <section className={`section bg-cream ${styles.founderSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.founderCard}>
                            <div className={styles.founderImageWrapper}>
                                <Image
                                    src="/images/manasvini-tyagi.jpg"
                                    alt="Manasvini Tyagi — Founder, Earthen Routes"
                                    width={600}
                                    height={800}
                                    className={styles.founderImage}
                                    priority
                                />
                                <div className={styles.founderImageAccent}></div>
                            </div>
                            <div className={styles.founderInfo}>
                                <span className={`label ${styles.founderLabel}`}>Founder</span>
                                <h2 className={styles.founderName}>Manasvini Tyagi</h2>
                                <p className={styles.founderTitle}>Permaculture Designer · 14+ Years Experience</p>
                                <div className={styles.founderBio}>
                                    <p>
                                        I&apos;m Manasvini Tyagi, a Mumbai-based permaculture designer with over 14 years of hands-on experience growing food systems and nurturing communities. My academic background is in Textile Design and English Honours, and I bring that blend of creativity, observation, and storytelling into the way I work with land, people, and learning.
                                    </p>
                                    <p>
                                        My journey into permaculture began at Earthen Routes, where I started as a volunteer, learning directly from the soil and the rhythms of the farm. Over time, my involvement deepened, and by 2018 I took over as the Founder. While Earthen Routes primarily grows food on the campus of Tata ACTREC Hospital to support pediatric cancer patients with fresh, nourishing produce, it has also grown into a wider permaculture practice — engaging with diverse landscapes, communities, and learning spaces rooted in regenerative design.
                                    </p>
                                    <p>
                                        Since then, I&apos;ve worked across a wide range of contexts, designing regenerative landscapes, building farms, and creating living classrooms where learning happens through soil, seeds, and seasons. I enjoy teaching and facilitating across age groups and have had the opportunity to share my work on international platforms.
                                    </p>
                                    <p>
                                        At my core, I&apos;m deeply relationship-driven. I choose to work with people who align with the ethics of permaculture — those who are open, curious, and willing to experiment and learn alongside the land. I connect easily across generations, love animals, and feel most alive when I&apos;m outdoors, in action. Young at heart and always ready for new adventures, I see permaculture not just as a practice, but as a way of living with care, joy, and responsibility.
                                    </p>
                                </div>
                                <div className={styles.founderTags}>
                                    <span className={styles.tag}>🌱 Permaculture</span>
                                    <span className={styles.tag}>🌿 Organic Farming</span>
                                    <span className={styles.tag}>📚 Workshop Facilitator</span>
                                    <span className={styles.tag}>🏡 Land Design</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-parchment text-center">
                <div className="container">
                    <ScrollReveal>
                        <h2>Want to Join Our Team?</h2>
                        <p style={{ maxWidth: 560, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
                            We&apos;re always looking for passionate volunteers, collaborators, and earth-lovers.
                        </p>
                        <a href="/get-involved" className="btn btn-moss btn-large">
                            Get Involved
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
