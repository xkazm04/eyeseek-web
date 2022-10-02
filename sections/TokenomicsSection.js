

import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import Image from 'next/image'
import Tokenomics from '../public/Tokenomics.png'
import Title from '../components/typography/Title';
import LButton from '../components/buttons/LButton';
import Subtitle from '../components/typography/Subtitle';

const Container = styled.div`
    background: linear-gradient(180deg, rgba(22, 0, 0, 0.3) 50%, rgba(22, 0, 0, 0) 100%);
    text-align: center;
`

const ImageBox = styled.div`
    display: block;
`
const TitleBox = styled.div`
    position: absolute;
    padding-left: 17%;
    z-index: 1;
`

const ActionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TokenomicsSection = () => {

    const { t } = useTranslation('common');

    return <><Container>
          <TitleBox> <Title  text={t('header.tokenomics')}/></TitleBox>
        <ImageBox><Image
            src={Tokenomics}
            alt="Tokenomics"
            fill="full"
            /></ImageBox>
            <ActionBox>
                    <Subtitle text={t('token.reference')}/>
                <LButton text={t('token.button')}/>
            
            </ActionBox>

        </Container></>
}

export default TokenomicsSection



