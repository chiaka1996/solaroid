"use client"
import { ClashDisplay, Satoshi } from '@/fonts';
import Head from 'next/head';
import {SideBar, Navigation, Footer} from "@/components/index"

// export const metadata = {
//   title: 'solaroid solar company',
//   description: 'product page for solaroid',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    
    <html lang="en">
      <body style={Satoshi.style}>
        
        <Navigation page="products" />
        <SideBar page="products" /> 
        {children}
      </body>
    </html>
  )
}