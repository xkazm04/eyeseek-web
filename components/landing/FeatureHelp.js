
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import Title from '../typography/Title';
import LDesc from '../typography/LDesc';
import LPoint from '../typography/LPoint';
import Image from 'next/image'
import Eye4 from '../../public/Eye4.png'
import LButton from '../buttons/LButton';
const Container = styled.div`
    padding: 5%;
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const ImageBox = styled.div`
   position: absolute;
   left: 0;
   margin-left: 10%;
    margin-top: -10%;
`

const FeatureHelp = () => {

    const { t } = useTranslation('common');

    return <Container>
                <ImageBox><Image
            src={Eye4}
            alt="Eye4"
            width={'380%'}
            height={'200%'}
            />
            </ImageBox>
        <Title text={t('landing.helpTitle')}/>
        <LDesc text={t('landing.helpText1')}/>
        <br></br>
        <LDesc text={t('landing.helpText2')}/>
        <LPoint text={t('landing.helpLi1')}/>
        <LPoint text={t('landing.helpLi2')}/>
        <LPoint text={t('landing.helpLi3')}/>
        <br></br>
        <LDesc text={t('landing.helpText3')}/>
        <LPoint text={t('landing.helpLi4')}/>
        <LPoint text={t('landing.helpLi5')}/>
        <LPoint text={t('landing.helpLi6')}/>
        <div>  <a href='https://www.docs.eyeseek.org/docs/whitepaper/quests' target="_blank" rel="noopener noreferrer"> <LButton text={t('landing.helpButton')}/></a></div>
    </Container>
}

export default FeatureHelp