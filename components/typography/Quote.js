import styled from 'styled-components'

const Box = styled.div`
    font-size: 1.5em;
    font-family: 'Gemunu Libre';
    letter-spacing: 0.3px;
    font-weight: 100;
    font-style: italic;
`

const Quote = ({text}) => {
    return <Box>{text}</Box>
}

export default Quote;