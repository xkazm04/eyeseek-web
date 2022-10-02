import Image from 'next/image';
import styled from 'styled-components';

const MidPart = styled.div`
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
    width: 30%;
    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`

const StepBox = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 1.2em;
    font-weight: lighter;
    @media (max-width: 1268px) {
        font-size: 1em;
    }
`

const Step = styled.div`
    text-align: left;
    color: #B0F6FF;
    font-family: 'Chill';
    font-weight: lighter;
    font-size: 1.1em;
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`

const Label = styled.div`
     font-family: 'Chilanka', cursive;
     @media (max-width: 768px) {
        font-size: 0.9em;
    }
`

const DiagramRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4%;
    padding-top: 2%;
    padding-left: 5%;
`

const UpperLine = styled.div`
    padding-bottom: 5px;
    border-bottom: 2px solid #10B73F;
`
const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-style: italic;
    margin-left: 5%;
    text-align: left; 
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
    
`

const ImageBox = styled.div`
    width: 80px;
`

const SideBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
`

const EventMain = styled.div`
    text-decoration: underline;
    margin-bottom: 5%;
`

const HowToRow = ({step, img1src, img1alt, img2src, img2alt, label1, label2, line1, line2, event1, event2, event3}) => {
    return <>
    <StepBox>
    <Step>{step}</Step>
    <DiagramRow>
     <SideBox><ImageBox><Image
            src={img1src}
            alt={img1alt}
            fill='responsive'
            /></ImageBox><Label>{label1}</Label></SideBox> 
        <MidPart><UpperLine>{line1}</UpperLine> {line2}</MidPart>
        <SideBox><ImageBox><Image
            src={img2src}
            alt={img2alt}
            fill='responsive'
            /></ImageBox><Label>{label2}</Label></SideBox> 
            <Event>
                <EventMain>{event1}</EventMain>
                <div>{event2}</div>
                 <div>{event3}</div>
            </Event>
    </DiagramRow>
    </StepBox>
    </>
}

export default HowToRow