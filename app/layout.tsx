import type { Metadata } from 'next'
import { Viaoda_Libre } from 'next/font/google'
import './globals.css'

const inter = Viaoda_Libre({weight:['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kpop Idol',
  description: 'Page web qui liste les idols de Kpop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
