import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://leisure-plus.vercel.app/"),
  keywords: ["movies", "tv shows", "leisure", "plus", "series", "LuFernandoMG"],
  title: {
    default: "Leisure Plus",
    template: `%s | Leisure Plus`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    description:
      "Here you can find the best movies and TV shows, and save them to watch them later! This site was made with ❤️ by LuFernandoMG.",
  },
  description:
    "Here you can find the best movies and TV shows, and save them to watch them later! This site was made with ❤️ by LuFernandoMG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
