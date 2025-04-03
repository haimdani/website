import './globals.css'
import { Inter, Rubik } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const rubik = Rubik({ subsets: ['hebrew'], variable: '--font-rubik' })

export const metadata = {
  title: 'חיים דנינו זיו - סוכנות לביטוח',
  description: 'סוכנות ביטוח מקצועית המתמחה בביטוח פנסיוני ופיננסי',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.variable} ${rubik.variable} font-hebrew`}>
        {children}
      </body>
    </html>
  )
} 