import { Fira_Sans } from "next/font/google";
import "./globals.css";
import HeaderOne from "@/components/layout/HeaderOne";
import HeaderTwo from "@/components/layout/HeaderTwo";
import Footer from "@/components/layout/Footer";


const inter = Fira_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Seed Seekering App",
  description: "Help to find Quality seeds and review",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderOne />
        <HeaderTwo />
        {children}
        <Footer />
        </body>
    </html>
  );
}
