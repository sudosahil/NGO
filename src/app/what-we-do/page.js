'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

const services = [
    {
        color: 'var(--moss-mid)',
        title: 'Community Farm Project',
        summary: "Nestled inside the Tata ACTREC Hospital, in the heart of Navi Mumbai, Earthen Routes is more than simply a farm – it's a social project that supports the paediatric patients of St Jude's ChildCare Centre. Powered by volunteering activities, fund-raising events and corporate/individual sponsorships, Earthen Routes is \"Enriching Urban Communities\", one organic plant at a time.",
        details: [
            "Within TATA ACTREC, St. Jude's ChildCare Centre accommodates child-cancer patients, for whom it is crucial to consume pesticide-free food.",
            "We cultivate organic seasonal produce for the children of St. Jude's.",
            "Earthen Routes is a Social Entrepreneurship, a hybrid form that combines the features of a for-profit and non-profit enterprise. We work towards our primary goal of supporting the dietary needs of our patients, and also operate with a business-like efficiency.",
            "Join us to experience the benefits of community farming and green living.",
        ],
    },
    {
        color: 'var(--harvest-gold)',
        title: 'Kitchen Garden Setup',
        summary: "Our kitchen garden setups show that it is indeed possible to incorporate gardening into a daily routine. From plucking fresh herbs straight from your windowsill to having complete control over what goes into your meal, we are here to help you foster a healthier way of living.",
        details: [
            "A kitchen garden is a small setup of herbs, fruits and vegetables that you can create at your own home. It is one of the simplest ways we can make our cities greener.",
            "Anyone with a space for plants can set up a kitchen garden. In the past, Earthen Routes has helped individuals, groups, corporates and even housing societies set up their own kitchen gardening spaces.",
            "100% organic set-up to help you grow nutritious food.",
            "Design customizations available as per requirements.",
            "Benefits: reduce your carbon footprint, purify the air around you, and improve your overall mental and spiritual well-being.",
        ],
    },
    {
        color: 'var(--soil-light)',
        title: 'Land Projects',
        summary: "We provide end-to-end execution of farm land projects inspired by Permaculture and natural farming principles. Our mission is to produce 100% organic, high-quality produce. Our land projects include Open Farm Lands, Schools, Farmhouses, and more.",
        details: [
            "We offer end-to-end consulting and execution of farm land projects.",
            "Consultation includes layout designing, planning and site visits.",
            "We restore your land with 100% organic waste, such as leaves, coconut shells, and kitchen waste.",
            "Our previous land projects have included schools, farmhouses, personal properties, and other open land areas.",
        ],
    },
    {
        color: 'var(--sprout)',
        title: 'Workshops',
        summary: "At Earthen Routes, we believe in empowering urban communities by sharing knowledge. Open to individuals, groups and corporates, join us for one of our workshops and discover the many benefits of organic, sustainable living.",
        badges: ['Online & Offline', 'Experienced Facilitators', 'Open to All'],
        workshops: [
            {
                name: 'Organic Kitchen Gardening',
                desc: "Participants will learn the forest-inspired ways of growing one's own plants, including vegetables, herbs, fruit trees, and medicinal plants, in the city. Learn about the basics of soil ecology and the correlation of these sustainable practices to our health and well-being. Participants will also learn how to make a \"Living Soil Pot\" and a DIY bottle-drip irrigation system for watering their plants!",
            },
            {
                name: 'Home Kitchen-Waste Composting',
                desc: "Learn how to turn your daily vegetable scraps and other kitchen waste into a nutrient-rich compost with minimum hassle! This workshop will take you through a step-by-step process of composting your own kitchen waste at home.",
            },
            {
                name: 'Growing Micro-greens',
                desc: "Microgreens are the first few leaves of edible plants and herbs. Rich in zinc, magnesium, and calcium, among other nutrients, these power-booster seedlings are 30 times more nutritious than adult plants. With minimal space and resources, learn to grow your own microgreens of cabbage, broccoli, basil, dill, radish, spinach, amaranth, lentils, and more.",
            },
        ],
    },
];

function ServiceCard({ service }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.serviceCard} style={{ borderLeftColor: service.color }}>
            <h3>{service.title}</h3>
            <p className={styles.serviceSummary}>{service.summary}</p>

            {service.badges && (
                <div className={styles.badgesRow}>
                    {service.badges.map((b, i) => (
                        <span key={i} className={styles.badge}>{b}</span>
                    ))}
                </div>
            )}

            <button
                className={styles.toggleBtn}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                {expanded ? 'Show Less ▲' : 'Know More ▼'}
            </button>

            <div
                className={styles.expandable}
                style={{ maxHeight: expanded ? '2000px' : '0' }}
            >
                {service.details && (
                    <ul className={styles.detailList}>
                        {service.details.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                )}

                {service.workshops && (
                    <div className={styles.workshopList}>
                        {service.workshops.map((ws, i) => (
                            <div key={i} className={styles.workshopBlock}>
                                <h4>{ws.name}</h4>
                                <p>{ws.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function WhatWeDoPage() {
    return (
        <>
            <section className="page-hero">
                <span className="label hero-anim-1">Our Services</span>
                <h1 className="hero-anim-2">What We Do</h1>
                <p className="hero-anim-3">
                    From community farming to workshops — we grow food, knowledge, and community.
                </p>
            </section>

            <section className="bg-cream section">
                <div className="container">
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 80}>
                            <ServiceCard service={service} />
                        </ScrollReveal>
                    ))}

                    <ScrollReveal className="text-center" style={{ marginTop: '2rem' }}>
                        <a href="mailto:earthenroutes@gmail.com" className="btn btn-gold btn-large">
                            Register for a Workshop
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
