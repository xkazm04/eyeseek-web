import {useState} from 'react'
import styled from 'styled-components'
import MobItem from '../buttons/MobItem'
import {MusicIcon, ReactIcon, SoccerIcon, TravelIcon} from '../icons/CatSet'
import {RankOne, RankFive} from '../icons/RankSet'
import MTitle from '../typography/MTitle'
import IconButton from '../buttons/IconButton'
import {SwordsIcon, BellIcon, EarthIcon, ChainIcon} from '../icons/MobileSet'
import SuccessAnimation from '../animations/SuccessAnimation'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MobileTitle = styled.div`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10%;
`

const MobileBot = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    gap: 4%;
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


const MobileExp = () => {
    const [confirm, setConfirm] = useState(false)

    const con = () => {
        setConfirm(true);
    }

    return <Container>
    <MobileTitle onClick={()=>{setConfirm(false)}}><MTitle text='Available quests'/></MobileTitle>
      {!confirm ? <Body onClick={()=>{con()}}><MobItem logo={<MusicIcon width='25'/>} title='Please rate music' description={'DnB, Hard bass ... '} rightUp='3w' rightDown={<RankOne width='10'/>} />
        <MobItem logo={<SoccerIcon width='25'/>} title='Looking for a player' description={'19:30, Main stadium, $20 entry'} rightUp='55min' rightDown={<RankOne width='10'/>} />
        <MobItem logo={<ReactIcon width='25'/>} title='Review my code' description={'100 rows, $10 reward. '} rightUp='1w' rightDown={<RankFive width='15'/>} />
        <MobItem logo={<TravelIcon width='20'/>} title='Please rate music' description={'6-month journey, join the party'} rightUp='1mo' rightDown={<RankOne width='10'/>} /></Body> : <Success>
            <SuccessAnimation/>
        </Success>
        }
        <MobileBot>
                <IconButton icon={<ChainIcon width={27} height={40}/>}/>
                <IconButton icon={<EarthIcon width={25} height={40}/>}/>
                <IconButton icon={<SwordsIcon width={25} height={40}/>}/>
                <IconButton icon={<BellIcon width={25} height={35}/>}/>
            </MobileBot>
    </Container>
}

export default MobileExp