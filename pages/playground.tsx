import {
    useAccount,
    useConnect,
    useDisconnect,
    useNetwork,
  } from 'wagmi'
import {useState, useEffect} from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components';
import Subtitle from '../components/typography/Subtitle';
import PlayFunding from '../sections/playground/PlayFunding'
import Quests from '../sections/playground/Quests'
import Image from 'next/image';
import Eye9 from '../public/Eye9.png'

  export async function getStaticProps({locale}: { locale: string; }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'mobile'])),
      },
    };
  }

  const Container = styled.div`
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: center;
      padding: 5%;
      font-size: 1.1em;
  `

  const Left = styled.div`
    min-width: 400px;
    background: rgba(26, 26, 26, 0.7);
    max-height: 50%;
    padding: 2%;
    border-radius: 15px;
    border: 1px solid #686868;
  `

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
  `

  const Warning = styled.div`
    color: red;
  `

const ImageBox = styled.div`
  position: absolute; 
  z-index: -1;
`

const Button = styled.button`
  margin-top: 10%;
  font-size: 1em;
`

const Header = styled.div`
  margin-top: 2%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 7%;
`

const Submenu = styled.div`
  display: flex;  
  flex-direction: row;
`

const SubButton = styled.button`
  padding: 1%;
  &:hover {
    cursor: pointer;
  }
`

const SubActButton = styled(SubButton)`
  background: #000000;
`

  export default function Exp() {
    const { t } = useTranslation('common');
    const [feat, setFeat] = useState('Funding');

    // Wallet connection hooks
    const { address, connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()
    const {chain} = useNetwork()

    useEffect(() => {
      if (address) {
        localStorage.setItem('eye_address', address);
      }
    },[connect]);

    if (isConnected) {
      return (
        <> <Header>  <Subtitle text={t('play.title')}/> 
            {/* <Submenu>
            {feat === 'Funding' ? <SubActButton>Funding</SubActButton> : <SubButton onClick={()=>{setFeat('Funding')}}>Funding</SubButton> }
            {feat === 'Shark' ? <SubActButton>Shark</SubActButton> : <SubButton onClick={()=>{setFeat('Shark')}}>Shark</SubButton> }
            {feat === 'Quests' ? <SubActButton>Quest</SubActButton> : <SubButton onClick={()=>{setFeat('Quests')}}>Quest</SubButton> }
        </Submenu> */}
        </Header>
      
        <Container>
            <ImageBox>
              <Image src={Eye9} alt="Eye9" />
            </ImageBox>
      
       <Row> 
       <Left>
         <Subtitle text={t('play.connection')} /> 
         {connector && <div>{t('play.connected')} {connector.name}, {connector.id}, {chain && chain.name}</div>}
         
         {chain && chain.name !== 'Mumbai' && <Warning>{t('play.wrongNetwork')}</Warning>}
         {/* @ts-ignore */}
          <Button onClick={disconnect}>{t('play.disconnect')}</Button>
          </Left>

        {feat === 'Funding' && <PlayFunding />}
        {feat === 'Quests' && <Quests />}
         </Row>

        </Container></>
      )
    }
  
    return (
      <Container>
      <div>
        {connectors.map((connector) => (
          <Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            Connect to {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </Button>
        ))}
  
        {error && <div>{error.message}</div>}
        </div>

      </Container>
    )
  }