
import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import Feature from '../components/decorative/Feature'


const Container = styled.div`
    padding-top: 5%;
    background: Block;
    padding-left: 10%;
    background: black;
`


const HeadSection = () => {

    const { t } = useTranslation('common');

    return <>
        <Container>
            <Feature/>
            <Feature/>
            <Feature/>
        </Container></>
}




export default HeadSection