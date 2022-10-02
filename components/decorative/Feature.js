
import styled from 'styled-components'
import CircleButton from '../buttons/CircleButton'
import {WorldIcon} from '../icons/MobileSet'
import CircleMenuButton from '../buttons/CircleMenuButton'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #B6B6B6;
    border-radius: 45px;
    color: white;
    border-radius: 15px;
    margin: 5%;
    min-height: 500px;
    max-width: 70%;
    margin-bottom: 15%;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        max-width: 100%;
        min-height: 300px;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2%;
`

const MobileBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(2, 6, 6, 0.95);
    border: 10px solid #393939;
    border-radius: 35px;
    width: 400px;
    right: 20%;
    margin-top: -15px;
    height: 750px;
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
    margin: 3%;
`


const MobileMid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10%;
`


const Feature = ({textPart, mobilePart}) => {

    return <Container>
        <TextBox>{textPart}</TextBox>    
        <MobileBox>
            <MobileHead><CircleButton color={'white'} icon={<WorldIcon width={25}/>}/> <CircleMenuButton/>
            </MobileHead>
        
            <MobileMid>{mobilePart}</MobileMid>
        </MobileBox>
    </Container>
}

export default Feature