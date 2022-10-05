
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px; 
    background: ${props => props.color};
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
    border-radius: 45px;
    &:hover {
        cursor: pointer;
    }
    animation: pulse-red 2s infinite;
    @keyframes pulse-red {
    0% {
        transform: scale(1.55);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
    }
    
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
    }
    
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    };}
`

type PulsingProps ={ 
    color: string;
    onClick: () => void;
}


const PulsingDot = ({color, onClick}: PulsingProps) => {
    return <Container color={color} onClick={onClick}
    ></Container>
}

export default PulsingDot;
