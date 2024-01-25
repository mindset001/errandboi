import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const mont = Montserrat_Alternates({ subsets: ["latin"], weight: ['100', '200', '300', '400', '700'],});

export const metadata = {
  title: "Errandboi",
  description: "Lets handle your stress for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
