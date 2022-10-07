
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import Title from '../typography/Title';
import LDesc from '../typography/LDesc';
import LPoint from '../typography/LPoint';
import LButton from '../buttons/LButton';
import Image from 'next/image'
import Eye5 from '../../public/Eye5.png'

const Container = styled.div`
    padding: 5%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (min-width: 1768px) {
        width: 90%;
    }
`
const ImageBox = styled.div`
   position: absolute;
   right: 0;
   margin-left: 10%;
    margin-top: -10%;
`


const FeatureShark = () => {

    const { t } = useTranslation('common');

    return <Container>
                        <ImageBox><Image
            src={Eye5}
            alt="Eye5"
            width={'480%'}
            height={'350%'}
            />
            </ImageBox>
      <div>  <Title text={t('landing.sharkTitle')}/>
        <LDesc text={t('landing.sharkText1')}/>
        <br></br>
        <LDesc text={t('landing.sharkText2')}/>
        <LPoint text={t('landing.sharkLi1')}/>
        <LPoint text={t('landing.sharkLi2')}/>
        <LPoint text={t('landing.sharkLi3')}/>
        <LPoint text={t('landing.sharkLi4')}/>
        <br></br>
        <LDesc text={t('landing.sharkText3')}/></div>
        <br></br>
        <LPoint text={t('landing.sharkLi5')}/>
        <LPoint text={t('landing.sharkLi6')}/>
        <LPoint text={t('landing.sharkLi7')}/>
     <div>   <LButton text={t('landing.sharkButton')}/></div>
    </Container>
}

export default FeatureShark