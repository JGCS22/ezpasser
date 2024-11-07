
"use client";
import OutlinedButton from "./components/OutlinedButton";
import LogoButton from "./components/LogoButton";
import Link from 'next/link'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const handleClick = () => {};

  return (
    <html lang="en">
      <body className="flex flex-col gap-y-1 h-lvh w-full px-20 py-10 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row items-center justify-end gap-x-5 h-1/6 min-h-20 max-w-full">
          <div className="flex mr-auto">
            <Link href={"/"}>
              <LogoButton/>
            </Link>
          </div>
          <div className="flex gap-x-5">
            <Link href={"/settings"}>
              <OutlinedButton onClick={handleClick} text="SETTINGS" />
            </Link>
            <Link href={"/login"}>
              <OutlinedButton onClick={handleClick} text="LOGIN" />
            </Link>
          </div>
        </div>
        <div className=" bg-red-500 h-max grow">
            {children}
        </div>
        <div className="bg-yellow-400 h-20 min-h-20">
          <p>footer</p>
        </div>
      </body>
    </html>
  );
}
