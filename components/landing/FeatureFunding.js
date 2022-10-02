
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import Title from '../typography/Title';
import LDesc from '../typography/LDesc';
import LButton from '../buttons/LButton';
import Image from 'next/image'
import Eye6 from '../../public/Eye6.png'
import LPoint from '../typography/LPoint';


const Container = styled.div`
    padding: 5%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        padding: 4%;
    }
`

const ImageBox = styled.div`
   position: absolute;
   margin-left: 10%;
   margin-top: -10%;
`

const FeatureFunding = () => {

    const { t } = useTranslation('common');

    return <Container>
        <ImageBox><Image
            src={Eye6}
            alt="Eye6"
            width={'1080%'}
            height={'120%'}
            />
            </ImageBox>
      <div>  <Title text={t('landing.fundingTitle')}/>
        <LDesc text={t('landing.fundingText1')}/>
        <LPoint text={t('landing.fundingLi1')}/>
        <LPoint text={t('landing.fundingLi2')}/>
        <LPoint text={t('landing.fundingLi3')}/>
        <br></br>
        <LDesc text={t('landing.fundingText2')}/>
        <br></br></div>
     <div>   <LButton text={t('landing.fundingButton')}/></div>
    </Container>
}

export default FeatureFunding