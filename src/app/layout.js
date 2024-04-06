import { Inter } from 'next/font/google'
import '../scss/global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'This is test',
  description: 'This is just my test',
  keywords: ['Каменская СОШ', 'Каменская школа','музей','музей Каменской школы','Каменое','хрень'],
  authors: [
      {name: 'Larkin Maxim', role: 'main developer'}
    ],
};

export const viewport =  {
    initialScale: 1.0,
    maximumScale: 1.0,
    minimumScale: 1.0,
    width: 'device-width',
    userScalable: 'no'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
