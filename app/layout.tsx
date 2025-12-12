import type { Metadata } from 'next';
import React from 'react'
import localFont from "next/font/local";
import './globals.css';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const outfit = localFont({
  src: [
    {
      path: './fonts/Outfit-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Outfit-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Outfit-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Outfit-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-outfit',
  display: 'swap', // Improves loading performance
  preload: true, // Preload the font
  fallback: ['system-ui', 'arial'] // Fallback fonts
});

export const metadata: Metadata = {
  title: 'Karl Bejerano',
  description: 'Dev Portfolio',
  icons: {
    icon: "/icon.png",
  }
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang='en' className='overflow-x-hidden!'>
      <body className={`${outfit.variable} antialiased overflow-x-hidden!`}>
        {children}
      </body>
    </html>
  )
}
