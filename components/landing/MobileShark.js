import Image from "next/image"
import styled from "styled-components"
import map from '../../public/map.png'
import { ConfirmIcon, IgnoreIcon, InfoIcon, QrExample, ReportIcon } from "../icons/MobileSet"
import { useTranslation } from "next-i18next"
import CircleButton from "../buttons/CircleButton"
import PulsingDot from "../animations/PulsingRed"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

`
const Title = styled.div`
    font-family: 'Montserrat';
    font-size: 1.2em;
    font-weight: 600;
    letter-spacing: 0.2px;
    padding: 1%;
`

const Subtitle = styled.div`
    font-family: 'Montserrat';
    font-size: 1em;
    font-weight: 300;
    padding: 1%;
`

const Address = styled.div`
    font-family: 'Montserrat';
    font-size: 0.9em;
    font-style: italic;
    font-weight: 300;
    padding: 1%;
`

const UpperBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    width: 100%;
`

const Map = styled.div`
    position: absolute;
    width: 120%;
    left: -40px;
    top: 80px;
`

const RedBox = styled.div`
    position: absolute;
    top: 285px;
    left: 190px;
`

const BottomBox = styled.div`
    position: absolute;
    bottom: 0;
    background: black;
    width: 100%;
    border-radius: 35px;
    height: 42%;
`

const BottomMainPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 4%;
`

const Mark = styled.div`
    position: absolute;
    margin-top: 5%;
    margin-left: 5%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ActionBox = styled.div`
    display: flex;
    justify-content: space-between;
   border-top: 1px solid white;
   padding: 7%; 
`

const MobileShark = () => {
    const { t } = useTranslation('mobile');

    return <Container>
        <UpperBox>
            <Title>{t('shark.exampleTitle')}</Title>
            <Subtitle>{t('shark.exampleSubtitle')}</Subtitle>
          
        </UpperBox>
        <Map><Image src={map} alt='map'   /></Map>
        <RedBox><PulsingDot color='red'/></RedBox>
        <BottomBox>
            <Mark><InfoIcon width={25}/></Mark>
            <BottomMainPart>
                <Title>{t('shark.geoFound')}</Title>
                <Subtitle>{t('shark.exampleLocation')}</Subtitle>
                <Address>{t('shark.exampleAddress')}</Address>
            </BottomMainPart>
            <ActionBox>
                <Column><CircleButton color={'#FFE4E4'} icon={<ReportIcon width={40}/>} /> <CircleButton color={'#FFEDDD'} icon={<IgnoreIcon width={40}/>} /></Column>
                <Column><div>{t('shark.discountAvailable')}</div> <div><QrExample width={90}/></div></Column>
                <Column><div/> <CircleButton color={'#B8FFC7'} icon={<ConfirmIcon width={30}/>} /></Column>
            </ActionBox>
        </BottomBox>
    </Container>
}

export default MobileShark