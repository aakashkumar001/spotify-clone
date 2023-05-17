import Player from './components/Player'
import Sidebar from './components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import ModalProvider from './providers/ModalProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Sidebar>
          {children}
        </Sidebar>
        <Player />
      </body>
    </html>
  )
}
