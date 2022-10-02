import {useState} from 'react'
import styled from 'styled-components'
import { useTranslation ,  } from 'next-i18next';
import Image from 'next/image'
import Logo from '../public/Logo.png'
import Link from 'next/link'
import { ExitIcon } from '../components/icons/MobileSet';
import { pushRotate as Menu } from 'react-burger-menu'

const Container = styled.div`
    padding-left: 4%;
   // background: linear-gradient(180deg, rgba(22, 0, 0, 0.3) 50%, rgba(22, 0, 0, 0) 100%);
`

const NavItem = styled.div`
    display: flex;
    font-size: 1.6em;
    font-family: 'NoBill';
    font-style: normal;
    align-items: center;
    letter-spacing: 1px;
    &:hover{
     cursor: pointer;
   }
   @media (max-width: 768px) {
     font-size: 1em;
     flex-wrap: wrap;
    }
`

const HeadBox = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    padding: 2%;
    color: #B0F6FF;
    @media (max-width: 768px) {
    
        justify-content: center;
   }
`

const RightBox = styled.div`
    display: none;
`

const ImageBox = styled.div`
    display: block;
    @media (max-width: 768px) {
    
     font-size: 0.8em;
     flex-wrap: wrap;
     padding-right: 10%;
     right: 0;
    }
    &:hover{
        cursor: pointer;
    }
`

const MenuBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 100%;
    padding-left: 15%;
    @media (max-width: 768px) {
     padding: 0;
     flex-wrap: wrap;
     display: none;
    }
`

const A = styled.div`
    &:hover{
     opacity: 0.8;
   }
`

const AB = styled(A)`
    font-weight: bold;
`

const Burger = styled.div`
    color: #B0F6FF;
    @media (min-width: 768px) {
     display: none;
    }
`


const Header = () => {
    const [active, setActive] = useState("Home")
    const { t } = useTranslation('common');

    return <><Container>
        <HeadBox>
        <ImageBox><Link href="/"><A><Image
            src={Logo}
            alt="Logo"
            width={'110%'}
            height={'50%'}
            /></A></Link> </ImageBox>
        

         <MenuBox>
            <NavItem onClick={()=>{setActive("Explained")}}>
                {active === "Explained" ? <Link href="/explained"><AB>{t('header.howWorks')}</AB></Link> : <Link href="/explained"><A>{t('header.howWorks')}</A></Link>}
            </NavItem>
            <NavItem onClick={()=>{setActive("Playground")}}>
                {active === "Playground" ? <Link href="/playground"><AB>{t('header.playground')}</AB></Link> : <Link href="/playground"><A>{t('header.playground')}</A></Link>}
            </NavItem>
            <NavItem onClick={()=>{setActive("Tokenomics")}}>
                {active === "Tokenomics" ? <Link href="/tokenomics"><AB>{t('header.tokenomics')}</AB></Link> : <Link href="/tokenomics"><A>{t('header.tokenomics')}</A></Link>}
            </NavItem>
            <NavItem>
                   <A>{t('header.whitepaper')}</A>  <ExitIcon width={10}/>
            </NavItem>
            <NavItem>
                 <A>{t('header.docs')}</A>  <ExitIcon width={10}/>
            </NavItem>
        </MenuBox>
        
      <Burger><Menu right>
      <NavItem onClick={()=>{setActive("Explained")}}>
                {active === "Explained" ? <Link href="/explained"><AB>{t('header.howWorks')}</AB></Link> : <Link href="/explained"><A>{t('header.howWorks')}</A></Link>}
            </NavItem>
            <NavItem onClick={()=>{setActive("Playground")}}>
                {active === "Playground" ? <Link href="/playground"><AB>{t('header.playground')}</AB></Link> : <Link href="/playground"><A>{t('header.playground')}</A></Link>}
            </NavItem>
            <NavItem onClick={()=>{setActive("Tokenomics")}}>
                {active === "Tokenomics" ? <Link href="/tokenomics"><AB>{t('header.tokenomics')}</AB></Link> : <Link href="/tokenomics"><A>{t('header.tokenomics')}</A></Link>}
            </NavItem>
            <NavItem>
                   <A>{t('header.whitepaper')}<ExitIcon width={10}/></A>  
            </NavItem>
            <NavItem>
                 <A>{t('header.docs')}<ExitIcon width={10}/></A>  
            </NavItem>
        </Menu></Burger>
        <RightBox>{t('header.dashboard')} 
         
         </RightBox>
        </HeadBox>
        </Container></>
}




export default Header