import { Playfair_Display, Lora, DM_Mono } from 'next/font/google';
import './globals.css';
import LayoutShell from './components/LayoutShell';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
});

const dmMono = DM_Mono({
    subsets: ['latin'],
    variable: '--font-dm-mono',
    display: 'swap',
    weight: ['400', '500'],
});

export const metadata = {
    title: 'Earthen Routes — Enriching Urban Communities',
    description:
        'Earthen Routes is an urban community farm at TATA ACTREC Hospital, Kharghar, growing 100% organic food for paediatric cancer patients at St. Jude\'s ChildCare Centre, powered entirely by volunteers.',
    keywords: 'organic farming, urban farm, NGO, Navi Mumbai, Kharghar, community farm, volunteering, sustainable agriculture',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${lora.variable} ${dmMono.variable}`} suppressHydrationWarning>
            <body>
                <LayoutShell>{children}</LayoutShell>
            </body>
        </html>
    );
}
