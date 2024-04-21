import { Hanken_Grotesk } from "next/font/google";
import "./globals.scss";

import NavBar from "./components/NavBar/NavBar";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hanken.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
