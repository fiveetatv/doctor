import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const circular = localFont({
  src: "../public/font/circular-std-medium-500.ttf",
  variable: "--font-circular",
});

const satoshi = localFont({
  src: "../public/font/Satoshi-Medium.otf",
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Doctor | Patient-Centered Healthcare & Expert Doctors",
  description: "Doctor is dedicated to providing exceptional healthcare through a comprehensive, patient-centered approach. Discover our expert doctors, key vision, and healthcare services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${circular.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

