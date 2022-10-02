import styled from 'styled-components'

const Box = styled.div`
    font-size: 1.2em;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
letter-spacing: 1px;
`

const MTitle = ({text}) => {
    return <Box>{text}</Box>
}

export default MTitle;