import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bracket | Digital Systems That Scale",
  description: "Boutique agency specializing in software, AI, and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bracket-black text-white selection:bg-primary selection:text-black">
        <LoadingScreen />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}


