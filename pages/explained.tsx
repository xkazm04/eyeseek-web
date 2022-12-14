
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components';
import ExpFunding from '../sections/explained/ExpFunding'
import ExpPromotion from '../sections/explained/ExpPromotion'
import ExpHelp from '../sections/explained/ExpHelp'
import Title from '../components/typography/Title';
import Subtitle from '../components/typography/Subtitle';
import Image from 'next/image';
import Eye from '../public/Eye.png'
import elipse from '../public/elipse.png'
import Eye7 from '../public/Eye7.png'
import LButton from '../components/buttons/LButton';


  export async function getStaticProps({locale}: { locale: string; }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'how'])),
      },
    };
  }

  const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10%;
      margin-top: 1%;
      padding: 5%;
      @media (max-width: 768px) {
        max-width: 100%;
        padding: 0;
        margin: 0;
    }
  `;

const Heading = styled.div`
    background: rgba(0, 0, 0, 0.6);
    padding: 5%;
    border-radius: 15px;
    margin-bottom: 7%;
    animation: fadeIn 0.5s;
    width: 80%;
 
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`
const TitleBox = styled.div`
    width: 60%;
    background: #140505;
    padding: 5%;
    margin-bottom: 9%;
    border: 1px solid #757575;
`

const EyeBox = styled.div`
  position: absolute;
  right: 5%;
`

const ElipseBox = styled.div`
  position: absolute;
  top: 100%;
  opacity: 0.2;
`
const ImageBox = styled.div`
    margin: 10%;
     text-align: center;
    position: relative;
`

  export default function Explained() {
    const { t } = useTranslation('how');
  
    return (
      <Container>
            <EyeBox><Image src={Eye} alt={'eye'} width={250} height={200} /></EyeBox>
            <ElipseBox><Image src={elipse} alt='elipse' /></ElipseBox>
        <Heading>
            <TitleBox><Title text={t('title.head')} />
            <Subtitle text={t('title.sub')} /></TitleBox>
          <LButton text={t('title.docs')} />



        </Heading>
            <ExpHelp/>
            <ExpPromotion />
            <ExpFunding />
            <LButton text={t('title.docs')} />

            <ImageBox><Image
              src={Eye7}
              alt="Eye7"
              width={'600%'}
              height={'70%'}
            />
            </ImageBox>
      </Container>
    )
  }