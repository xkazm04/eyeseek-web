

import styled from 'styled-components'

const Container = styled.div`
    background: white;
    border: 1px solid white;
    color: black;
    border-radius: 15px;
`

const BackDiv = styled.div`
    position: Relative;
    color: white;
    min-height: 100px;
`



const Block = () => {

    return <Container>
        <BackDiv>Boxy</BackDiv>

    </Container>
}

export default Block