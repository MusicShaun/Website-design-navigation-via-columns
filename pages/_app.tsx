import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../globalContexts/GlobalContext'
import Header from '../components/Header'
import Navigation from './navigation/Navigation'
import { useEffect, useState } from 'react'
import LoadingBar from '../components/LoadingBar'
import Footer from '../components/Footer'
import ArrowScrollButton from '../components/ArrowScrollButton'
import { Provider } from 'react-redux'
import {store} from '../app/store'
import Head from 'next/head'
import MobileNav from '../components/MobileNav'


export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  
  return (
    <GlobalContextProvider>
      <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&amp;family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,700&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;family=Press+Start+2P&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" rel="preconnect"></link>
      </Head>
      
      {loading && <LoadingBar />}
        
      {!loading &&  
        <div className='main_event'>
          <Navigation />
          <Header />
          <Component {...pageProps} />
          <ArrowScrollButton />
          <Footer />
      </div> 
        }

      <MobileNav />
        
    </Provider>
    </GlobalContextProvider>
    
  )
}

