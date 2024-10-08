import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'


import '../globals.css'

export const metadata = {
  title: 'MoraLus & RojaLus',
  description: 'A useful notes and journaling app made for two silly people',
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-300`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
