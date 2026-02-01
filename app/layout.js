import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common-component/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ReactLenis } from "lenis/react";
import Section6 from "@/common-component/home/Section6";
import { GoogleAnalytics } from "@next/third-parties/google";
import { base_url } from "./sitemap";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "ARJY",
//   description:
//     "",
//   keywords: [
//     "blockchain",
//     "security",
//     "crypto",
//     "decentralized",
//     "web3",
//     "finance",
//     "exchange",
//     "bitcoin",
//     "binance",
//   ],
//   icons: {
//     icon: ["/assets/only-logo.svg"],
//     apple: ["/assets/only-logo.svg"],
//     shortcut: ["/assets/only-logo.svg"],
//   },
//   other: {
//     rel: "mask-icon",
//     url: "/assets/only-logo.svg",
//   },
//   //////////////////asasd///////////

//   openGraph: {
//     title: "Nowory - Your Gateway to Instant Digital Wealth.",
//     description:
//       "Nowory offers seamless INR and crypto deposits, withdrawals, and transfers with zero fees and instant execution. Experience effortless crypto transactions, redefined.",
//     url: `${base_url}`,
//     siteName: "Nowory",
//     images: [
//       {
//         url: `${base_url}/assets/logo.svg`,
//         width: 1200,
//         height: 630,
//         alt: "Nowory",
//         type: "image",
//       },
//     ],
//     type: "website",
//     locale: "en_US",
//   },

//   twitter: {
//     card: "summary_large_image",
//     // site: "@YourFChainHandle",
//     // creator: "@YourPersonalHandle",
//     title: "Nowory - Your Gateway to Instant Digital Wealth.",
//     description:
//       "Nowory offers seamless INR and crypto deposits, withdrawals, and transfers with zero fees and instant execution. Experience effortless crypto transactions, redefined.",
//     images: [`${base_url}/assets/logo.svg`],
//   },

//   authors: [{ name: "Nowory Team", url: `${base_url}` }],
//   creator: "NoWory Development",

//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//     userScalable: false,
//   },
// };


export const metadata = {
  title: "ARJY Pumps | Reliable Submersible Motor Pump Solutions",
  description:
    "ARJY is a trusted submersible motor pump manufacturer delivering high-performance, energy-efficient pumping solutions for agriculture, domestic, and industrial applications.",

  keywords: [
    "ARJY pumps",
    "submersible motor pump",
    "submersible pump manufacturer",
    "water pump",
    "borewell pump",
    "agricultural pumps",
    "industrial pumps",
    "electric motor pump",
    "water pumping solutions",
    "India pump company",
  ],

  icons: {
    icon: ["/assets/arjylogo.jpeg"],
    apple: ["/assets/arjylogo.jpeg"],
    shortcut: ["/assets/arjylogo.jpeg"],
  },

  openGraph: {
    title: "ARJY Pumps | Powerful & Efficient Submersible Motor Pumps",
    description:
      "ARJY manufactures durable and efficient submersible motor pumps designed for agriculture, domestic water supply, and industrial use. Built for performance and reliability.",
    url: `${base_url}`,
    siteName: "ARJY Pumps",
    images: [
      {
        url: `${base_url}/assets/arjylogo.jpeg`,
        width: 1200,
        height: 630,
        alt: "ARJY Submersible Motor Pumps",
        type: "image",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "ARJY Pumps | Trusted Submersible Motor Pump Manufacturer",
    description:
      "High-quality submersible motor pumps by ARJY, engineered for agriculture, domestic, and industrial water solutions.",
    images: [`${base_url}/assets/arjylogo.jpeg`],
  },

  authors: [{ name: "ARJY Pumps", url: `${base_url}` }],
  creator: "ARJY Engineering Team",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-9JBD7QCT91" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastContainer />
          <ReactLenis root />
          <Header type={"layout"} />
          {children}
          {/* <Section6 /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
