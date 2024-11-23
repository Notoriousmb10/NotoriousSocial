'use client';


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from 'react-redux';
import store from '../redux-store/store';
const metadata: Metadata = {
  title: "NotoriousSocial",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="px-10">
            <Navbar />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
    </Provider>
  );
}
