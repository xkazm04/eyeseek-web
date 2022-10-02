
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px; 
    background: ${props => props.color};
    box-shadow: 0px 2px 25px ${props => props.color} , inset 0px 1px 3px ${props => props.color};
    border-radius: 45px;
    &:hover {
        cursor: pointer;
    }
`


const CircleButton = ({icon, color, onClick}) => {
    return <Container color={color} onClick={onClick}
    whileHover={{ scale: 0.98 }} 
    transition={{ type: "spring", stiffness: 500, damping: 3 }}
    >{icon}</Container>
}

export default CircleButton
