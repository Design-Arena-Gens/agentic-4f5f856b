import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Astra Finance Tracker",
  description:
    "Stay ahead of your finances with intelligent goal tracking, expense insights, and live visual analytics."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
