import React from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'

import AuthButton from 'components/AuthButton'

import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <div className={`container mx-auto ${inter.className}`}>
      <SessionProvider session={session}>
        <nav className="py-3 border-b border-solid border-gray-300">
          <div className="container mx-auto px-2">
            <div className="flex items-center justify-between">
              <Link className="font-bold hover:opacity-50" href="/">
                Spotify App
              </Link>
              <div>
                {session && <span className="mr-3">{session.user.name}</span>}
                <AuthButton />
              </div>
            </div>
          </div>
        </nav>

        <main className="py-10">
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </div>
  )
}

export default App
