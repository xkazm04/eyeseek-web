import styled from 'styled-components'

const Box = styled.div`
    font-size: 1em;
    font-family: 'Roboto';
    font-weight: light;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        max-width: 100%;
    }

`

const Description = ({text}) => {
    return <Box>{text}</Box>
}

export default Description;