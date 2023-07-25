"use client"
import { ClashDisplay, Satoshi } from '@/fonts';
import "./styles/global.css"
import Head from 'next/head';
import {SideBar, Navigation, Footer} from "./components"
import {useState} from 'react'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showBar, setShowBar] = useState<Boolean>(false)

  const toggleBarState = () => {
    setShowBar(prev => !prev)
  }

  return (
    
    <html lang="en">
     
      {/* <body className={inter.className}>{children}</body> */}
      <body style={Satoshi.style}>
        <Navigation page="home" toggleBar={toggleBarState} />
        <SideBar page="home" bar={showBar} toggleBar={toggleBarState} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
