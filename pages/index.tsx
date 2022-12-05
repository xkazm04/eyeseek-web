import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from "framer-motion"
import {useRef, useEffect} from 'react'
import { useTranslation } from 'next-i18next'
import Script from 'next/script'

import Feature from '../components/decorative/Feature'
import MobileHelp from '../components/landing/MobileHelp'
import MobileShark from '../components/landing/MobileShark'
import MobileFunding from '../components/landing/MobileFunding'
import Quote from '../components/typography/Quote'

import dynamic from 'next/dynamic'
import Eye from '../public/Eye.png'
import Eye2 from '../public/Eye2.png'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import axios from 'axios';

const HeadSection = dynamic(() => import('../sections/landing/HeadSection'), { ssr: false })
const FeatureHelp = dynamic(() => import('../components/landing/FeatureHelp'), {})
const FeatureFunding = dynamic(() => import('../components/landing/FeatureFunding'), {})
const FeatureShark = dynamic(() => import('../components/landing/FeatureShark'), {})


export async function getStaticProps({locale}: { locale: string; }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mobile'])),
    },
  };
}

const Kontejner = styled.div`
  margin-top: 1%;
`;

const EyeBox = styled.div`
  position: absolute;
  z-index: 50;
  top: 20%;
  right: 5%;
  @media (max-width: 1468px) {
        display: none;
    }
`

const EyeTwoBox = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  opacity: 0.2;
`

const EyeSevenBox = styled.div`
    text-align: center;
    position: relative;
`

const Linear = styled(motion.div)`
    background: linear-gradient(179.95deg, rgba(0, 0, 0, 0.1) 1.36%, rgba(0, 53, 12, 0.1) 101.27%);
    padding: 5%;
    padding-left: 10%;
    padding-right: 10%;
    @media (max-width: 1068px) {
        padding: 0;
    }
`

const LinearTwo = styled(Linear)`
    background: linear-gradient(179.95deg, rgba(0, 53, 12, 0.1) 0.04%, rgba(1, 0, 56, 0.1)  99.96%);
`

const LinearThree = styled(Linear)`
    background: linear-gradient(179.95deg, rgba(1, 0, 56, 0.1) 0.04%, rgba(0, 0, 0, 0.1) 99.96%);
  `



const Home: NextPage = () => {
  const { t } = useTranslation('mobile');

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const scrollRef  = useRef(null);

  // Web3 Auth handling
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();


  const handleAuth = async () => {
    if (isConnected) {
        await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)

    const { data } = await axios.post('/api/auth/request-message', userData, {
        headers: {
            'content-type': 'application/json',
        },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/dashboard' page
    // @ts-ignore
    const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
    /**
     * instead of using signIn(..., redirect: "/dashboard")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
};

  return (
    
    <Kontejner>
      <Head>
        <title>Eyeseek</title>
        <meta name="title" content="Being kind could be fun too" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TKH8YE4L07"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TKH8YE4L07');
        `}
      </Script>
     <HeadSection/>
     {/* <button onClick={() => handleAuth()}>Authenticate via Metamask</button> */}
      
      <EyeBox><Image
            src={Eye}
            alt="Eye"
            width={'600%'}
            height={'500%'}
            /></EyeBox>
      
      <EyeTwoBox><Image
            src={Eye2}
            alt="Eye2"
            width={'350%'}
            height={'580%'}
            /></EyeTwoBox>

        <Linear><Feature textPart={<FeatureHelp/>} mobilePart={<MobileHelp/>}/><Quote text={t('landing.quoteHelp')}/></Linear>
         <LinearTwo>   <Feature textPart={<FeatureShark/>} mobilePart={<MobileShark/>}/>   <Quote text={t('landing.quoteShark')}/></LinearTwo>
           <LinearThree> <Feature textPart={<FeatureFunding/>} mobilePart={<MobileFunding/>}/>   </LinearThree>
            
    </Kontejner>
  )
}

export default Home
