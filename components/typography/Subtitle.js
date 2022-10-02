import styled from 'styled-components'

const Box = styled.div`
    font-size: 2em;
    font-family: 'NoBill';
    letter-spacing: 1px;
    @media (max-width: 1168px) {
        font-size: 1.5em;
    }
`

const Subtitle = ({text}) => {
    return <Box>{text}</Box>
}

export default Subtitle;