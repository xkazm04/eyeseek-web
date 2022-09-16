import styled from 'styled-components'

const Box = styled.div`
    font-size: 1em;
`

const Description = ({text}) => {
    return <Box>{text}</Box>
}

export default Description;