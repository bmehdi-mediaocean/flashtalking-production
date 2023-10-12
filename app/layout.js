import {Montserrat, Mulish} from 'next/font/google';
import "../styles/globals.css";
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-montserrat"
})

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-mulish"
})

export default async function RootLayout({ children }) {
    const data = await getMenu();
    //console.log({ data });
    return <html lang="en" className={`${montserrat.variable} ${mulish.variable}`}>
        <body className="font-body">
            <MainMenu
                ctaDestination={data.ctaDestination}
                ctaLabel={data.ctaLabel}
                items={data.mainMenuItems}
            />
            {children}
        </body>
    </html>;
};