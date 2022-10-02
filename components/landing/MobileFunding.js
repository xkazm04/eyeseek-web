
import styled from 'styled-components'
import MTitle from '../typography/MTitle'
import BottomComfirmation from '../../sections/textHeavy/BottomConfirmation'
import FundingSummary from '../../sections/textHeavy/FundingSummary'
import { useTranslation  } from 'next-i18next'
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MobileTitle = styled.div`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    margin-bottom: 10%;
`

const MobileHelp = () => {
    const { t } = useTranslation('mobile');

    return <Container>
    <MobileTitle><MTitle text={t('funding.titleDetail')} /></MobileTitle>
        <FundingSummary/>
        <BottomComfirmation/>
    </Container>
}

export default MobileHelp