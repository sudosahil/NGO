'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './TestimonialCarousel.module.css';

const testimonials = [
    {
        text: "What an amazing and beautiful farm, but first and foremost the community that makes the farm is very friendly and welcoming new volunteers all the time. If you love farming and wanna give back to the community, work in a farm or gain more knowledge about it Earthen Routes is definitely the place to go for. Last but not least the owner of the farm Manasvini-ji is extremely helpful and friendly.",
        author: "Om",
        role: "Volunteer"
    },
    {
        text: "I was aware of Earthen Routes and wanted my kid and friends to experience the connection with nature there. So had requested to conduct my kid's birthday party there. All thanks to Manasvini, Siddhi and Sanika for making this party a huge success and helping the kids connect with nature in a beautiful way. This is a must-visit place. You get to explore various green beauties! Looking forward for being a part of their workshops.",
        author: "Gayatri Shankar",
        role: ""
    },
    {
        text: "Wow! Fantastic ambience and experience. I came here today for my performance at Earthenfest winter soiree. Who would think someone grows chillies, brinjals, bottle guard, peppermint and sunflowers in an urban city. The farm is very well maintained. I would highly recommend this community farm for nature enthusiasts as well as for events. Thank you for hosting me. I will come again here for sure whenever an event is organised again.",
        author: "Kruti Suchak",
        role: ""
    },
    {
        text: "I've had one of the best learning experiences here, and met wonderful people, it's one and only urban food forest in the middle of the city!",
        author: "Vashika Arora",
        role: ""
    },
    {
        text: "It is a community who welcomes all. A place to be yourself, a place to experience bliss through nature.",
        author: "Nikita Rajput",
        role: ""
    },
    {
        text: "A happy place, vibrant community, a food forest, a place to serve, all in a very friendly atmosphere. I joined here thinking about it as an organic farm, but the earthen routes community is so much more. This is a place, where there is something for all — a green space, a food forest, an active community, finding peace in service, learning organic farming and kitchen gardening, teaching and above all a place which has a very non-judgemental vibe! Hats off to the vision and efforts taken by Manaswini m'am to keep this place thriving.",
        author: "Adi Pattani",
        role: ""
    },
    {
        text: "Heaven for me... all the positivity of nature and humanity come together at this place.",
        author: "Asmita S",
        role: ""
    },
    {
        text: "Earthen Routes is my GO TO place. It's an ever evolving and growing community. It has helped me gain immense knowledge on gardening; how to care and nurture plants. They have an organic and holistic approach towards their activities. I am blessed to be a part of this community.",
        author: "Vishwajyoti S",
        role: ""
    },
    {
        text: "The best place to feel grounded, connect with nature at its very roots, and learn new things about farming, organic produce, living sustainably, etc. The farm is built on the love and support of volunteers and supervised by a very enthusiastic and able core team, who give their all to it every single day. Volunteering is an excellent way to give back to earth... and also pick up tips and tricks that would help you with your gardening experiments at home. If you're lucky, you can also buy saplings and handmade planters and freshly harvested produce straight from farm to table! Do visit. The vibe is beautiful and positive always!!!",
        author: "Sneha Bhat",
        role: ""
    },
    {
        text: "Earthen Routes is a little haven in the concrete jungle that Kharghar has become. I have done their kitchen gardening workshop and found a whole bunch of gardening enthusiast friends. It is very rewarding being associated with ER and the friendly people who are always willing to help. The regular sales of healthy saplings and potting mix has helped me keep my own window garden fresh and green and I have learned how to grow many edible plants and care for them with simple organic fertilizers and pest repellents. Volunteers are welcome to help at the farm — the produce is used for the children at the St Judes facility at the Tata hospital on the campus.",
        author: "Rhea Dalal",
        role: ""
    },
    {
        text: "Earthen Routes... My happy place.. Where humans, dogs and plants and trees coexist peacefully. A totally volunteer run community, I am so grateful to have met so many wonderful people and learn the nuances of growing a kitchen garden, composting, making bio enzyme, etc. The most wonderful part of the farm is that it nourishes the young children afflicted with cancer while they undergo treatment. The infectious enthusiasm with which the volunteers put in their time and energy keeps the farm thriving. Mumbai people.. Specially Navi Mumbai folks.. Do visit.. You will be hooked.",
        author: "Babita Raja",
        role: ""
    },
    {
        text: "A hidden gem in Navi Mumbai. There is so much to learn & do here, all contributed to a good cause. You can learn how to grow your own food, organic farming etc & contribute towards the environment. P.S — The founder of the farm is very cool!",
        author: "Shashank Kharat",
        role: ""
    },
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const goTo = useCallback((index) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(index);
            setFade(true);
        }, 300);
    }, []);

    const next = useCallback(() => {
        goTo((current + 1) % testimonials.length);
    }, [current, goTo]);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <div className={styles.carousel}>
            <div className={styles.quoteDecor}>&ldquo;</div>
            <div className={`${styles.slide} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                <blockquote className={styles.quote}>
                    &ldquo;{t.text}&rdquo;
                </blockquote>
                <p className={styles.author}>
                    — <strong>{t.author}</strong>
                    {t.role && <span className={styles.role}> ({t.role})</span>}
                </p>
            </div>

            <div className={styles.dots}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
