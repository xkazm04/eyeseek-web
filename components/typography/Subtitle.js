import styled from 'styled-components'

const Box = styled.div`
    font-size: 1em;
`

const Subtitle = ({text}) => {
    return <Box>{text}</Box>
}

export default Subtitle;