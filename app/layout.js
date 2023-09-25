import ReduxProvider from './redux/ReduxProvider'
import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import DrawerComp from './components/Drawer/DrawerComp'
import DarkModeProvider from './providers/DarkModeProvider'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Codio Test Case',
  description: 'Codio Test Case',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <DarkModeProvider>
          <Header />
          <DrawerComp />
          {children}
          </DarkModeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
