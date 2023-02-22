import React from 'react'
import { Inter } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'

import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <div className={inter.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

export default App
