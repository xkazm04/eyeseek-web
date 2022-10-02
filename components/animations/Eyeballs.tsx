import styled from "styled-components"
const Container = styled.div`
    display: flex;
`

const Eyes = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 370px;
    color: black;
    background-color: black;
    background-image: url("./Eye1.png");
    border-radius: 50%;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2), inset 0 0 15px #000000,inset 0 0 25px #000000;
    &:before {
        top: 50%;
        left: 35px;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #000;
        position: absolute;
        border: 10px solid skyblue;
        box-sizing: border-box;
    }
`

const EyeBall = styled.div`
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 50%;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2), inset 0 0 15px #263171,inset 0 0 25px #000000;
`

const Eyeballs = () => {

    return <Container id='anchor'>
            <Eyes id="eyes"><EyeBall className="eye"/></Eyes>
    </Container>
}

export default Eyeballs