
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
      <div className="fixed flex items-center bg-black top-0 left-0 right-0 text-white">
        <div className="flex mr-auto justify-center">
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
      <main className=" bg-red-500 h-max grow">
        {children}
      </main>
      <div className="bg-yellow-400 h-20 min-h-20">
        <p>footer</p>
      </div>
    </body>
   </html>
  );
}
