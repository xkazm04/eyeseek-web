
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import Title from '../typography/Title';
import LDesc from '../typography/LDesc';
import LPoint from '../typography/LPoint';
import Image from 'next/image'
import Eye4 from '../../public/Eye4.png'
import { RightArrow } from '../icons/MobileSet';

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

const FollowUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    margin-top: -10%;
    margin-right: 5%;
    @media (max-width: 768px) {
        display: none;
    }
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

        <FollowUp>{t('header.howWorks')}<RightArrow width={30}/></FollowUp>
    </Container>
}

export default FeatureHelp