import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "McKenzie Cambridge Preparatory Academy",
    template: "%s — McKenzie Cambridge Preparatory Academy",
  },
  description:
    "McKenzie Cambridge Preparatory Academy — a new preparatory school in the planning stages. Crescimus Discendo, Ducimus Intellectu: we grow by learning, we lead with knowledge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
