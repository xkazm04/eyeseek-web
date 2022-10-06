
import styled from 'styled-components'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import { useTranslation  } from 'next-i18next';
import RectangleBlack from '../../public/RectangleBlack.png'
import Image from 'next/image';
import { motion } from "framer-motion"
import Eyeballs from '../../components/animations/Eyeballs';


const Container = styled.div`
    position: relative;
    padding-top: 5%;
    padding-left: 15%;
    z-index: 10;
    margin-bottom: 25%;
    @media (max-width: 1018px) {
        padding: 0;
    }
`
const BlackDecorative = styled.div`
    position: absolute;
    z-index: 1;
    opacity: 0.9;
    left: 80px;
    max-width: 70%;
    @media (max-width: 1218px) {
        display: none;
    }
`

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #140505;
    width: 50%;
    margin: 2%;
    padding: 2%;
    margin-bottom: 1%;
    max-width: 500px;
    border: 1px solid #757575;
    border-radius: 15px;
    @media (max-width: 1018px) {
        width: 100%;
        padding-left: 5%;
    }
`

const HeadBox = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleDesc = styled.div`
    font-size: 2em;
    font-family: 'Gemunu Libre', sans-serif;
    word-wrap: break-word;
    font-weight: 300;
    margin: 2%;
    max-width: 50%;
    color: #B0F6FF;
    z-index: 50;
    letter-spacing: 0.1px;
    margin-bottom: 1%;
    @media (max-width: 1018px) {
        max-width: 100%;
        padding: 2%;
        font-size: 1.5em;
        padding-left: 5%;
    }
`

const BetaDesc = styled(TitleDesc)`
    font-size: 1.5em;
    font-style: italic;
`

const DiscordButton = styled(motion.button)`
    position: absolute;
    background: #B0F6FF;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5em;
    margin: 2%;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 1.3%;
    padding-bottom: 1.3%;
    color: #B0F6FF;
    color: black;
     border-radius: 50px;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1018px) {
        font-size: 1.2em;
        margin-left: 5%;
    }
`

const EyeBox = styled.div`
    position: absolute;
    top: 90%;
    right: 40%;
    z-index: 50;
    @media (max-width: 1018px) {
        display: none;
    }
`

const HeadSection = () => {

    const { t } = useTranslation('common');

    return <> <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
                scale: 1,
                opacity: 1,
                transition: {
                delay: .2, 
                duration: 0.1
            }},}}>
     <EyeBox><Eyeballs/></EyeBox>
    <BlackDecorative>
        <Image src={RectangleBlack} alt="RectangleBlack" fill='responsive'/>
    </BlackDecorative>
    <Container>
    <HeadBox>
        <TitleBox>
            <Title text={t('head.title')}/>
            <Subtitle text={t('head.subtitle')}/>
        </TitleBox>


        </HeadBox>
                <TitleDesc>{t('head.description')}</TitleDesc>  <BetaDesc>{t('head.beta')}</BetaDesc>
                <DiscordButton
                    whileHover={{ scale: 0.98 }} 
                    transition={{ type: "spring", stiffness: 500, damping: 3 }}
                    >{t('head.button')}
                </DiscordButton>
            </Container>
      
            </motion.div></>
}




export default HeadSection