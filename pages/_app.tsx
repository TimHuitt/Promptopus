import { useEffect } from 'react'
import '../styles/global.css';
import ReactGA from 'react-ga4'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-EVH9V7EX44")
  }, []);

  return <Component {...pageProps} />;
}