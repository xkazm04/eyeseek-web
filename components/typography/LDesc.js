import styled from 'styled-components'

const Box = styled.div`
    font-size: 1.2em;
    font-family: 'Roboto';
    font-weight: 300;
    line-height: 1.3em;
    @media (max-width: 1168px) {
        font-size: 0.9em;
    }
`

const LDesc = ({text}) => {
    return <Box>{text}</Box>
}

export default LDesc;