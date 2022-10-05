import styled from 'styled-components'
import Subtitle from '../typography/Subtitle'

const Container = styled.div`
    background: #140505;
    border-radius: 35px;
    font-size: 1.1em;
    font-family: 'Roboto';
    font-weight: 300;
    letter-spacing: 0.2px;
    text-align: left;
    padding: 8%;
    @media (max-width: 1268px) {
        font-size: 0.9em;
    }
`

const Li = styled.li`
    margin-top: 5%;
    padding-left: 5%;
`

const P = styled.p`

`

const Explainer = ({title,p,li1,li2,li3,li4}) => {
    return <Container>
        <Subtitle text={title}/>
        <P>{p}</P>
        <Li>{li1}</Li>
        <Li>{li2}</Li>
  {li3 && <Li>{li3}</Li>}
 {li4 && <Li>{li4}</Li>}
    </Container>
}

export default Explainer;