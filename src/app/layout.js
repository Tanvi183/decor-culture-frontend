import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Decor and Culture | Modern Lifestyle & Decor",
  description: "Creating spaces that reflect your culture. Curated lifestyle essentials delivered right to your doorstep across Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakarta.variable} ${playfairDisplay.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 font-display`}
      >
        {children}
      </body>
    </html>
  );
}
