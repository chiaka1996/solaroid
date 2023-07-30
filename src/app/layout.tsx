"use client"
import { ClashDisplay, Satoshi } from '@/fonts';
import "./styles/global.css"
import Head from 'next/head';
import { State } from './context/context';
import {SideBar, Navigation, Footer} from "./components"
import {useState} from 'react'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <State>
    <html lang="en">
      <body style={Satoshi.style}>
        <main>
       
        {children}
         {/* <Footer /> */}
       
         </main> 
      </body>
    </html>
  </State> 
  )
}
