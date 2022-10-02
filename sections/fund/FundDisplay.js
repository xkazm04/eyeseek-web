import donator from '../../abi/donator.json'
import {useState} from 'react'
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import {useContractRead } from 'wagmi'
import Subtitle from '../../components/typography/Subtitle';
import { NumInput } from '../../components/form/Input';

const Container = styled.div`
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const FundDisplay = () => {
    const { t } = useTranslation('common');
    const [fundId, setFundId] = useState(0)

    const changeId = async(e) => {
        await setFundId(e.target.value)
    }
    
    var balance = 0
    var cap = 0
    var state = 0

    const {data} = useContractRead({
            addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
            contractInterface: donator.abi,
            functionName: 'getFundInfo',
            chainId: 80001,
            args: [fundId],
            watch: false,
          })

      if (data) {
          balance = data.balance.toString()
          cap = data.max.toString()
          state = data.state.toString()
        }

            // Write hook
      const micros = useContractRead({
              addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
              contractInterface: donator.abi,
              functionName: 'getConnectedMicroFunds',
              chainId: 80001,
              args: [fundId],
              watch: false,
            })
  
    
      var sth = ""
  
      if (micros.data){
        sth = micros.data.toString()
      }

    return <Container>
      <Subtitle text={`${t('play.fundInfo')} - ID:${fundId}`}/>

      <Row>   <div>{t('math.balance')}:</div> {balance && <>{balance}</>}</Row>
      <Row> <div> {t('math.cap')}:</div> {cap && <>{cap}</>}</Row>
      <Row>     <div> {t('play.fundState')}:</div> 
         {state === '0' && <> {t('play.fundStateFunded')}</>}
         {state === '1' && <> {t('play.fundStateActive')}</>}
         {state === '2' && <> {t('play.fundStateFunded')}</>}
         {!state && <> {t('play.fundStateNA')}</> }
         </Row>
         <Row>{micros && <><div>{t('play.microfunds')}:</div> {sth}</>}</Row>
      <div><NumInput placeholder={'Fund ID'} onChange={changeId} min={0} ></NumInput></div>

    </Container>
}

export default FundDisplay