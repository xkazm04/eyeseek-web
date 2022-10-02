import styled from 'styled-components'

const Box = styled.li`
    font-size: 1.1em;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    line-height: 1.3em;
    margin-left: 2%;
    @media (max-width: 1168px) {
        font-size: 0.8em;
    }
`

const LPoint = ({text}) => {
    return <Box>{text}</Box>
}

export default LPoint;