import styled from "styled-components"
import Script from 'next/script'
import {motion} from 'framer-motion'

const Container = styled.div`
    display: flex;
`

const Eyes = styled.div` 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 360px;
    color: black;
    background-color: black;
    background-image: url("./Eye12.png");
    opacity: 0.8;
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
    width: 50px;
    height: 50px;
    opacity: 1;
    border-radius: 50%;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.7), inset 0 0 7px #63c2b8,inset 0 0 8px #000000;
    background: black;
`

const Eye = styled(motion.div)`
    position: relative;
    width: 6.5em;
    height: 6.5em;
    border-radius: 50%;
    
`

const EyeCore = styled.div`
    position: absolute;
    top: 23px;
    left: 22px;
    height: 2px;
    width: 2px; 
    border-radius: 50%;
    align-self: center;
    background: #001850;
`
const Eyeballs = () => {

    return <Container>
            <Eyes>
            <Eye  className="eye" 
                whileHover={{ scale: 3.58 }} 
                transition={{ type: "spring", stiffness: 200, damping: 4 }}
                >
          <EyeBall className="eyeball"><EyeCore className="eyeball"/></EyeBall>
        </Eye>
                </Eyes>
    <Script src="script.js" ></Script>
    </Container>
}

export default Eyeballs