

import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import Image from 'next/image'
import Tokenomics from '../public/Tokenomics.png'
import Title from '../components/typography/Title';
import Subtitle from '../components/typography/Subtitle';
import Link from 'next/link';

const Container = styled.div`
    position: relative;
    background: linear-gradient(180deg, rgba(22, 0, 0, 0.3) 50%, rgba(22, 0, 0, 0) 100%);
    text-align: center;
`

const ImageBox = styled.div`
    display: block;
`
const TitleBox = styled.div`
    position: absolute;
    top: -10%;
    padding-left: 17%;
    z-index: 1;
`

const ActionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Op = styled.div`
    transition: 0.2s;
    &:hover{
        opacity: 0.8;
        cursor: pointer;
        border-bottom: 1px solid #B0F6FF;
    }
`

const TokenomicsSection = () => {

    const { t } = useTranslation('common');

    return <><Container>
          <TitleBox> <Title  text={t('header.tokenDistribution')}/></TitleBox>
        <ImageBox><Image
            src={Tokenomics}
            alt="Tokenomics"
            /></ImageBox>
            <ActionBox>
            <Op><Link href="/tokenomics"><Subtitle text={t('token.reference')}/></Link></Op>
            
            </ActionBox>

        </Container></>
}

export default TokenomicsSection



