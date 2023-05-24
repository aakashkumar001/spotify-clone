import { Figtree } from 'next/font/google'

import { cookies, headers } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
import PlayerProvider from '@/components/PlayerProvider'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import { getActiveProductsWithPrices, getSongsByUserId } from '@/libs/supabaseClient'

import './globals.css'

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
  const supabase = createServerComponentSupabaseClient({
    headers: headers,
    cookies: cookies
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const products = await getActiveProductsWithPrices();
  const songs = await getSongsByUserId(session?.user?.id);

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={songs}>
              {children}
            </Sidebar>
            <PlayerProvider />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
