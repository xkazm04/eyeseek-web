import styled from 'styled-components'
import CircleButton from '../../components/buttons/CircleButton'
import { ArrowLeft, DonateIcon, LogoIcon, MicrofundIcon } from '../../components/icons/MobileSet'
import { useTranslation  } from 'next-i18next'
import {useState} from 'react'
import Lightning from '../../components/animations/Lightning'

const Container = styled.div`
    background: black;
    position: absolute;
    bottom: 0;
    height: 30%;
    border-radius: 35px;
    width: 100%;
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    padding-left: 12%;
    padding-right: 12%;    
    font-size: 1em;
`

const Row = styled.div`
    display: flex;
    margin: 2%;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: italic;
`

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 8%;
`

const Value = styled.div`
    font-family: 'Montserrat';
`

const LightBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    right: 0;
`

const BottomConfirmation = ({}) => {
    const { t } = useTranslation('mobile');
    const [confirm, setConfirm] = useState(false);

    return <Container>
        <ContentBox>
            <Row><div>{t('funding.donationAmount')}</div><Value>20 <LogoIcon width={15}/></Value></Row>
            <Row><div>{t('funding.multiplicator')}</div><Value>46x</Value></Row>
            <Row><div>{t('funding.totalReceived')}</div><Value>920 <LogoIcon width={15}/></Value></Row>

        </ContentBox>
    {confirm && <LightBox><Lightning/></LightBox>}
        <Nav>
            <CircleButton onClick={()=>{setConfirm(false)}} color={'#FFE4E4'} icon={<ArrowLeft width={20}/>}/>
            <CircleButton onClick={()=>{setConfirm(true)}}  color={'#F5FFB8'} icon={<MicrofundIcon width={25}/>}/>
            <CircleButton onClick={()=>{setConfirm(false)}} color={'#B8FFC7'} icon={<DonateIcon width={20}/>}/>
        </Nav>
    </Container>
}

export default BottomConfirmation