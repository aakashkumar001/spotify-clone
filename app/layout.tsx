import { Figtree } from 'next/font/google'

import ModalProvider from './providers/ModalProvider'
import SupabaseProvider from './providers/SupabaseProvider'
import { createServerClient } from './libs/supabaseServer'
import SupabaseListener from './providers/SupabaseListener'

import Player from './components/Player'
import Sidebar from './components/Sidebar'

import './globals.css'
import ToasterProvider from './providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <ModalProvider />
          <Sidebar>
            {children}
          </Sidebar>
          <Player />
        </SupabaseProvider>
      </body>
    </html>
  )
}
