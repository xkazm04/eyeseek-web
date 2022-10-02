import {useState} from 'react'
import styled from 'styled-components'
import MobItem from '../buttons/MobItem'
import {MusicIcon, ReactIcon, SoccerIcon, TravelIcon} from '../icons/CatSet'
import {RankOne, RankFive} from '../icons/RankSet'
import MTitle from '../typography/MTitle'
import IconButton from '../buttons/IconButton'
import {SwordsIcon, BellIcon, EarthIcon, ChainIcon} from '../icons/MobileSet'
import SuccessAnimation from '../animations/SuccessAnimation'
import { useTranslation  } from 'next-i18next'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MobileTitle = styled.div`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10%;
    font-size: 20px;
`

const MobileBot = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    gap: 8%;
    background: rgba(0, 0, 0, 0.4);
    padding: 4%;
    border-radius: 35px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
`

const Success = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`


const MobileHelp = () => {
    const [confirm, setConfirm] = useState(false)
    const { t } = useTranslation('mobile');

    const con = () => {
        setConfirm(true);
    }

    return <Container>
        
    <MobileTitle onClick={()=>{setConfirm(false)}}><MTitle text={t('quest.titleAvailable')} /></MobileTitle>
      {!confirm ? <Body onClick={()=>{con()}}><MobItem logo={<MusicIcon width='35'/>} title={t('cat.musicFeedback')} description={t('cat.musicExample')} rightUp={t('time.exampleTime1')}  rightDown={<RankOne width='10'/>} />
        <MobItem logo={<SoccerIcon width='35'/>} title={t('cat.sportPlayer')} description={t('cat.sportExample')} rightUp={t('time.exampleTime2')} rightDown={<RankOne width='10'/>} />
        <MobItem logo={<ReactIcon width='35'/>} title={t('cat.codeFeedback')} description={t('cat.codeExample')} rightUp={t('time.exampleTime3')} rightDown={<RankFive width='15'/>} />
        <MobItem logo={<TravelIcon width='25'/>} title={t('cat.funTravel')} description={t('cat.funExample')} rightUp={t('time.exampleTime4')} rightDown={<RankOne width='10'/>} /></Body> : <Success>
            <SuccessAnimation/>
      
        </Success>
        }
        <MobileBot>
                <IconButton icon={<ChainIcon width={54} height={60}/>}/>
                <IconButton icon={<EarthIcon width={50} height={50}/>}/>
                <IconButton icon={<SwordsIcon width={50} height={50}/>}/>
                <IconButton icon={<BellIcon width={50} height={50}/>}/>
            </MobileBot>
    </Container>
}

export default MobileHelp