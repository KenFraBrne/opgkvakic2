import { AppProps } from 'next/app'
import { LoadingProvider} from 'context/Loading'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  )
}

export default MyApp
