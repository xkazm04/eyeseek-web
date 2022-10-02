
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

const Circle = styled.div`
    height: 6px;
    width: 6px; 
    background: #FFFFFF;
    box-shadow: 0px 4px 48px #FFFFFF, inset 0px 4px 4px #FFFFFF;
    border-radius: 45px;
`

const CircleMenuButton = () => {
    return <Container>
        <Circle/>
        <Circle/>
        <Circle/>
    </Container>
}

export default CircleMenuButton
