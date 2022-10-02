import styled from "styled-components"
import { LightningIcon, LogoIcon } from "../../components/icons/MobileSet"
import { useTranslation } from "next-i18next"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0, 4, 43, 0.4);
    border-radius: 35px;
    padding: 8%;
    margin: 2%;
`

const Title = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 5%;
`

const Subtitle = styled.div`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1em;
    font-style: italic;
    letter-spacing: 0.1px;
    margin-bottom: 8%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1%;
    font-size: 1em;
`

const RowTitle = styled.div`
     font-family: 'Roboto';
    font-weight: 400;
`


const RowValue = styled.div`
     font-family: 'Chilanka';
    font-weight: 100;
`

const Paragraph = styled.div`
    margin-top: 2%;
    border-top: 1px solid white;
    font-family: 'Roboto';
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 1.2em;
    font-size: 0.9em;
    padding-top: 5%;
    padding-bottom: 7%;
`

const FundingSummary = () => {
    const { t } = useTranslation('mobile');
    return <Container>
        <Title>{t('funding.exampleTitle')} </Title>
        <Subtitle>{t('funding.exampleSubtitle')} </Subtitle>
        <Row><RowTitle>{t('funding.statsDonated')}</RowTitle><RowValue>5000/100 000 <LogoIcon width={15}/></RowValue></Row>
        <Row><RowTitle>{t('funding.statsMicroActive')}</RowTitle><RowValue>51 <LightningIcon width={15}/></RowValue></Row>
        <Row><RowTitle>{t('funding.statsProject')}</RowTitle><RowValue><url>Project URL</url></RowValue></Row>

        <Paragraph>{t('funding.exampleParagraph')}</Paragraph> 
    </Container>
}

export default FundingSummary