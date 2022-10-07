import {motion} from 'framer-motion'
import styled from 'styled-components'

const Container = styled(motion.button)`
    border: 1px solid rgba(255,255,255,0.3);;
    border-radius: 5px;
    background: rgba(0,0,0,0.1);
    padding: 15px;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Chill';
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.7px;
    margin-top: 2%;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
    @media (max-width: 768px) {
        margin: 0;
    }
`

const LButton = ({text}) => {
    return <Container 
    whileHover={{ scale: 0.98 }} 
    transition={{ type: "spring", stiffness: 500, damping: 3 }}>{text}</Container>
}

export default LButton 

