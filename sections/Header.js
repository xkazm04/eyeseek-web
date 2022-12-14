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
    font-family: 'Gemunu Libre', sans-serif;
    font-style: normal;
    align-items: center;
    letter-spacing: 1px;
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
     cursor: pointer;
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
        <ImageBox>  <NavItem onClick={()=>{setActive("Home")}}><Link href="/"><A><Image
            src={Logo}
            alt="Logo"
            width={'110%'}
            height={'50%'}
            /></A></Link></NavItem> </ImageBox>
         <MenuBox>
            <NavItem onClick={()=>{setActive("Explained")}}>
                {active === "Explained" ? <Link href="/explained"><AB>{t('header.howWorks')}</AB></Link> : <Link href="/explained"><A>{t('header.howWorks')}</A></Link>}
            </NavItem>
            <NavItem>
                <A><a href='Whitepaper_v1.pdf' target="_blank" rel="noopener noreferrer">{t('header.whitepaper')}<ExitIcon width={10}/></a></A>  
            </NavItem>
            <NavItem>
                 <A><a href="https://www.docs.eyeseek.org" target="_blank" rel="noopener noreferrer">{t('header.docs')}  <ExitIcon width={10}/></a></A>
            </NavItem>
        </MenuBox>
        
      <Burger><Menu right>
      <NavItem onClick={()=>{setActive("Explained")}}>
                {active === "Explained" ? <Link href="/explained"><AB>{t('header.howWorks')}</AB></Link> : <Link href="/explained"><A>{t('header.howWorks')}</A></Link>}
            </NavItem>
            <NavItem>
                   <A href='Whitepaper_v1.pdf' target="_blank" rel="noopener noreferrer">{t('header.whitepaper')}<ExitIcon width={10}/></A>  
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