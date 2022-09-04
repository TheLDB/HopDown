import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { hop } from '@onehop/client'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(typeof window === undefined) {
      return;
    }

    hop.init({
      projectId: "project_NDYyNzI4OTEzMDY3MDQ5NjU"
    });

  }, [])
  return <Component {...pageProps} />
}

export default MyApp
