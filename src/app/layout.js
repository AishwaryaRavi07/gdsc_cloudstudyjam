import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC VJTI",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDSC VJTI Google Cloud Study Jams.",
  keywords: ["gccp", "jams", "vjti", "gdscvjti"],
  robots: "index,follow",

  "og:title": "GDSC VJTI Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDSC VJTI Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDSC PU Leaderboard",
  "twitter:description": "This is the leaderboard for the GDSC VJTI Jams.",
  "twitter:image": "",
  "twitter:site": "@gdscvjti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
