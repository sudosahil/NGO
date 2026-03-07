import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us — Earthen Routes',
    description: 'Learn about Earthen Routes — a volunteer-powered organic farm at TATA ACTREC growing food for paediatric cancer patients.',
};

export default function AboutPage() {
    return (
        <>
            {/* ========== PAGE HERO ========== */}
            <section className="page-hero">
                <span className="label hero-anim-1">Our Story</span>
                <h1 className="hero-anim-2">About Earthen Routes</h1>
                <p className="hero-anim-3">
                    A volunteer-powered, organically grown community rooted in healing, learning, and belonging.
                </p>
            </section>

            {/* ========== THE FARM ========== */}
            <section className="bg-cream section">
                <div className="container">
                    <ScrollReveal className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="label text-moss">The Farm</span>
                        <h2>One Acre of Purpose</h2>
                        <p style={{ maxWidth: 780, margin: '0 auto' }}>
                            The Advance Centre for Treatment, Research &amp; Education in Cancer (ACTREC) is the R&amp;D wing
                            of Tata Memorial Centre. Located in Kharghar, Navi Mumbai, Maharashtra, the hospital provides
                            treatment and advances cancer research. Behind the St. Jude&rsquo;s ChildCare Centre inside ACTREC,
                            our farm is spread out on a one-acre plot with a growing area of 30,000 sq. ft.
                        </p>
                    </ScrollReveal>

                    <div className="grid-3">
                        <ScrollReveal>
                            <div className="card">
                                <h3>Growing Organically</h3>
                                <p>
                                    When we first started the farm operation in 2012, the one-acre land was a dump site for construction waste.
                                    Our dedicated team of core volunteers works tirelessly to rejuvenate the soil and make it fertile for planting.
                                    This involved using organic matter from around the hospital (fallen leaves, twigs and branches), and collecting
                                    tender coconut shells from local vendors as a base to promote microbial activity in the soil. It took us over
                                    a year and a half to get the soil ready to actually start planting, but the results have been well worth it.
                                    At our farm, we take great care to propagate crops using heirloom, open-pollinated, and indigenous seeds,
                                    promoting seed saving and preserving biodiversity.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="card">
                                <h3>Our Beneficiaries</h3>
                                <p>
                                    Our beneficiaries are the paediatric patients of St. Jude&rsquo;s ChildCare Centre, who live on the ACTREC
                                    campus for their treatment. The seasonally grown organic vegetables, fruits, herbs and medicinal plants are
                                    cultivated with the intention of fulfilling their nutritional needs.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="card">
                                <h3>The Hands That Feed You</h3>
                                <p>
                                    The land is planned and managed by Ms. Manasvini Tyagi, along with our farm hand – Munir, who has been the
                                    backbone of our project for the past six years. He is an avid learner, and we could not have come this far
                                    without his support, dedication and determination. We recruit other variable farm hands depending on the
                                    availability of resources. Our brilliant team of volunteers and community members who come out every weekend
                                    are also an integral part of our farm.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ========== OUR COMMUNITY ========== */}
            <section className="bg-parchment section">
                <div className="container">
                    <ScrollReveal className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="label text-moss">Our People</span>
                        <h2>Our Community</h2>
                    </ScrollReveal>

                    {/* Founder Section — Photo + Bio */}
                    <ScrollReveal>
                        <div className={styles.founderSection}>
                            <div className={styles.founderPhotoCol}>
                                <div className={styles.founderPhotoWrapper}>
                                    <img
                                        src="/images/manasvini-tyagi.jpg"
                                        alt="Manasvini Tyagi — Founder, Earthen Routes"
                                        className={styles.founderPhoto}
                                    />
                                </div>
                                <div className={styles.founderCaption}>
                                    <span className={styles.founderCaptionName}>Manasvini Tyagi</span>
                                    <span className={styles.founderCaptionTitle}>Founder &amp; Farm Lead</span>
                                </div>
                            </div>

                            <div className={styles.founderBioCol}>
                                <p>
                                    Manasvini Tyagi, the founder of Earthen Routes, is dedicated to bringing
                                    the benefits of natural farming to cities. With a degree in Textile Designing
                                    and a certified Permaculture practitioner, she is driven by a passion to raise
                                    awareness about the benefits of growing your own food.
                                </p>
                                <p>
                                    Manasvini is insightful, approachable and a wonderful person to connect with.
                                    She is a multi-faceted individual – an artist, urban farmer, animal lover,
                                    nature photographer, and more.
                                </p>
                                <p>
                                    Having started as a volunteer in 2012, she has worked hard to build Earthen
                                    Routes into what it is today.
                                </p>
                                <p className={styles.founderQuote}>
                                    &ldquo;The journey has just begun!&rdquo;
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Dogs + Volunteers + Staff Cards */}
                    <div className={styles.communityGrid}>
                        <ScrollReveal>
                            <div className={styles.dogsCard}>
                                <h3>🐾 Our Four-Legged Happiness Squad!</h3>
                                <p>
                                    Earthen Routes is not only home to the biodiversity around it – we also have a four-legged gang
                                    who rules this place! Meet Kaluram, Jamun, Barfi and Gauri… the most playful set of creatures
                                    at the farm! They say love comes in all forms… ours comes packaged with wagging-tails, belly
                                    rubs and a little bit of mischief!
                                </p>
                                <div className={styles.dogTags}>
                                    <span className={styles.dogTag}>Kaluram</span>
                                    <span className={styles.dogTag}>Jamun</span>
                                    <span className={styles.dogTag}>Barfi</span>
                                    <span className={styles.dogTag}>Gauri</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="card">
                                <h3>Volunteers</h3>
                                <p>
                                    As a community farm, we involve people from all walks of life to come and volunteer with us.
                                    Be it sowing seeds, watering plants, making sapling for the nursery, or even non-farming
                                    activities such as organising fund-raising events and volunteering for workshops, our community
                                    is what keeps this place going. From students and teachers, to artists and working-professionals,
                                    we have built a wonderful community of volunteers, each of whom brings something new to the table.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="card">
                                <h3>Staff &amp; Management</h3>
                                <p>
                                    The land is planned and managed by Ms. Manasvini Tyagi, along with our farm hand – Munir, who
                                    has been the backbone of our project for the past six years. He is an avid learner, and we could
                                    not have come this far without his support, dedication and determination. We recruit other
                                    variable farm hands depending on the availability of resources.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ========== TIMELINE ========== */}
            <section className="bg-cream section">
                <div className="container">
                    <ScrollReveal className="text-center" style={{ marginBottom: '1rem' }}>
                        <span className="label text-moss">Our History</span>
                        <h2>From Barren Land to Thriving Forest</h2>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="text-center" style={{ maxWidth: 800, margin: '0 auto 3rem', color: 'var(--soil-mid)' }}>
                            Earthen Routes was founded in June 2012 by volunteers of &ldquo;Green Souls&rdquo;, a project managed by
                            &ldquo;Leaf n Light&rdquo;. It started on a barren piece of land at TATA ACTREC, in the backyard of the
                            St. Jude&rsquo;s ChildCare Centre. Despite initially facing challenges with the soil being unfit to grow
                            anything, the team of volunteers utilized natural farming methods and composted over 150+
                            tonnes of organic waste like leaves, branches, and coconut shells over the course of five years.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="text-center" style={{ maxWidth: 800, margin: '0 auto 3rem', color: 'var(--soil-mid)' }}>
                            This has resulted in a thriving farm with over 50 varieties of seasonal vegetables, herbs, fruits,
                            and medicinal plants. A thriving biodiversity, various species of butterflies, birds and other
                            pollinators have also made Earthen Routes their home. The parents of the child-cancer patients
                            also participate in farming activities, giving them an opportunity to relieve themselves of the
                            stress of caring for their ailing children. The farm has become a hub for education in organic
                            farming and environmental conservation, attracting volunteers from the local community,
                            schools, and corporations.
                        </p>
                    </ScrollReveal>

                    {/* Timeline */}
                    <div className={styles.timeline}>
                        <div className={styles.timelineLine}></div>

                        <ScrollReveal>
                            <div className={`${styles.milestone} ${styles.milestoneLeft}`}>
                                <div className={styles.milestoneDot}></div>
                                <div className={styles.milestoneContent}>
                                    <span className={styles.milestoneYear}>2012</span>
                                    <p>
                                        Founded by Green Souls / Leaf n Light volunteers. Land: one acre of barren construction
                                        waste dump at TATA ACTREC.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <div className={`${styles.milestone} ${styles.milestoneRight}`}>
                                <div className={styles.milestoneDot}></div>
                                <div className={styles.milestoneContent}>
                                    <span className={styles.milestoneYear}>2013–2014</span>
                                    <p>
                                        150+ tonnes of organic matter composted. Soil restoration underway. Parents of patients begin participating.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <div className={`${styles.milestone} ${styles.milestoneLeft}`}>
                                <div className={styles.milestoneDot}></div>
                                <div className={styles.milestoneContent}>
                                    <span className={styles.milestoneYear}>2017–Present</span>
                                    <p>
                                        50+ crop varieties thriving. Butterflies, birds, pollinators call Earthen Routes home.
                                        Education hub for schools, communities, and corporates.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
}
