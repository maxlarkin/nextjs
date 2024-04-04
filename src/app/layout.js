import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/global.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'This is test',
  description: 'This is just my test',
  keywords: ['Каменская СОШ', 'Каменская школа','музей','музей Каменской школы','Каменое','хрень'],
  authors: [{name: 'Larkin Maxim', role: 'main developer'},
    {name: 'Shutov Zaher', role: 'moral help'}]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
