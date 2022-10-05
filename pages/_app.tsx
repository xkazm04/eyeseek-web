import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Header from '../sections/Header'
import Footer from '../sections/Footer'

//Web3 Auth  
import { Chain, createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const mumbai: Chain = {
  id: 80_001,
  name: 'Mumbai',
  network: 'mumbai',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    default: 'https://rpc-mumbai.maticvigil.com',
  },
  testnet: true,
}



const { provider, webSocketProvider } = configureChains([mumbai],[
alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY }),
publicProvider(), ]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

type AppProps ={ 
    Component: any;
    pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <WagmiConfig client={client}>
  <SessionProvider session={pageProps.session} refetchInterval={10000}>
   <Header/>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </WagmiConfig>
  )
}

export default appWithTranslation(MyApp);
