import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';
import ReactGA from 'react-ga4'

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    ReactGA.initialize("G-EVH9V7EX44")
  }, [])

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}