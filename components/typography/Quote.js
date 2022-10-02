import styled from 'styled-components'

const Box = styled.div`
    font-size: 1.5em;
    font-family: 'Chilanka', cursive;
`

const Quote = ({text}) => {
    return <Box>{text}</Box>
}

export default Quote;