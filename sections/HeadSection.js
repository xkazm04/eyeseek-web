
import styled from 'styled-components'
import Block from '../components/decorative/Block'
import Title from '../components/typography/Title'
import Subtitle from '../components/typography/Subtitle'
import Description from '../components/typography/Description'
import { useTranslation  } from 'next-i18next';

const Container = styled.div`
    padding-top: 5%;
    background: Block;
    padding-left: 10%;
    background: black;
`

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #140505;
    width: 50%;
    padding: 2%;
`

const HeadSection = () => {

    const { t } = useTranslation('common');

    return <><Container>
        <TitleBox>
            <Title text={t('head.title')}/>
            <Subtitle text={t('head.subtitle')}/>
        </TitleBox>

            <Description text={t('head.description')}/>
        </Container></>
}




export default HeadSection