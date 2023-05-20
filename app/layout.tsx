import { Figtree } from 'next/font/google'

import ModalProvider from './providers/ModalProvider'
import SupabaseProvider from './providers/SupabaseProvider'

import Player from './components/Player'
import Sidebar from './components/Sidebar'

import './globals.css'
import ToasterProvider from './providers/ToasterProvider'
import UserProvider from './providers/UserProvider'
import { getActiveProductsWithPrices } from './libs/supabaseClient'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
