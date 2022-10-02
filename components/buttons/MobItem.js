import styled from 'styled-components'
import { TimeIcon } from '../icons/MobileSet'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid white;
    font-size: 0.8em;
    border-radius: 35px;
    font-weight: 400;
    height: 50px;
    align-items: center;
    margin-top: 5%;
    color: black;
    font-family: 'Chilanka', cursive;
    margin-left: 2%;
    margin-right: 2%;
    background: rgba(255, 255, 255, 0.8);
    &:hover{
        background: rgba(255, 255, 255, 1);
        cursor: pointer;
    }
`


const Icon = styled.div`
    position: absolute;
    align-items: center;
    padding: 2%;
    margin-left: 3%;
`

const Mid = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 20%;
`

const MidTitle = styled.div`
    font-size: 1.5em;
`

const MidSubtitle = styled.div`
    font-size: 1.1em;
`

const Right = styled.div`
    position: absolute;
    right: 0;
    margin-right: 7%;
    text-align: right;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 10%;
`




const MobItem = ({logo, title, description, rightUp, rightDown}) => {
    return <Box>
            <Icon>{logo}</Icon>
            <Mid><MidTitle>{title}</MidTitle><MidSubtitle>{description}</MidSubtitle></Mid>
            <Right><Row><TimeIcon width='13'/>{rightUp}</Row><div>{rightDown}</div></Right>
        </Box>
}

export default MobItem;