import donator from '../../abi/donator.json'
import {useState} from 'react'
import {useContractWrite, usePrepareContractWrite, useContractRead, useContractEvent} from 'wagmi'
import Subtitle from '../../components/typography/Subtitle'
import styled from 'styled-components'
import { CalcIcon } from '../../components/icons/MobileSet'
import Lightning from '../../components/animations/Lightning'
import { useTranslation } from 'next-i18next'

const Container = styled.div`
  padding: 5%;
`
const DonateForm = styled.div`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 100px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`

const Main =styled.div`
  display: flex;
  flex-direction: column;
`

const CalcBox = styled.div`
  box-shadow: 0px 2px 10px white , inset 0px 0px 2px white;
    &:hover{
    opacity: 0.8;
    cursor: pointer;
    background: #140505;
  }
`

const FlashyFlash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`

const Transaction = styled.div`
  word-wrap: break-word;
`

const Success = styled.div`
  color: #36CE00;
`

const FundCreate = () => {
    // Upravit kontrakt, kdokoliv může založit, pouze admin verify -> Rozšířit enum
    const { t } = useTranslation('mobile');
    const [calc, setCalc] = useState()
    const [conn, setConn] = useState()
    const [ev, setEv] = useState(false)

    const useEv = (e) => {
      console.log(e)
      setEv(true)
    }
    const [donateAmount, setDonateAmount] = useState(0)
    const handleDonateAmount = (e) => {
        setDonateAmount(e.target.value)
      }

      const calcMe = () => {
        setCalc((outcome.data).toString())
        setConn((connections.data).toString())
      }

    const [microAmount, setMicroAmount] = useState(0)
      const handleMicroAmount = (e) => {
        setMicroAmount(e.target.value)
        }

    const [fundId, setFundId] = useState(0)

    const handleFundId = (e) => {
        setFundId(e.target.value)
    }

    const outcome = useContractRead({
      addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
      contractInterface: donator.abi,
      functionName: 'calcOutcome',
      args: [fundId, donateAmount]
    })

    const connections = useContractRead({
      addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
      contractInterface: donator.abi,
      functionName: 'calcInvolvedMicros',
      args: [fundId, donateAmount]
    })

    useContractEvent({
      addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
      contractInterface: donator.abi,
      eventName: 'MicroDonated',
      listener: (event) => useEv(event),
      once: true
    })
    
    const {config}  = usePrepareContractWrite({
      addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
      contractInterface: donator.abi,
      functionName: 'createMicroFund',
      args: [microAmount, donateAmount, fundId],
    })
    
          const { isLoading, isSuccess, write, isError, error } = useContractWrite(config)

    return <Main><Container>

            <Row ><Subtitle text={t('funding.donate3')} />  </Row>
   
          <DonateForm>  
        <Row>{t('funding.projectId')}  <Input type={'number'} placeholder={t('funding.projectId')} onChange={handleFundId} min={0}></Input>    </Row>      
          <Row> {t('funding.microCreate')} <Input type={'number'} placeholder={t('funding.microAmount')} onChange={handleMicroAmount} min={0}></Input></Row> 
          <Row>{t('funding.donationDirect')}<Input type={'number'} placeholder={t('funding.donationAmount')}  onChange={handleDonateAmount} min={0}></Input></Row> 
          <Row> {t('funding.calc')} <CalcBox onClick={()=>{calcMe()}}><CalcIcon width={25}/></CalcBox></Row>
          <Row><div>{t('funding.amountTotal')} </div>${calc}</Row>
          <Row><div>{t('funding.microJoin')}</div>{conn}</Row>
          <br></br>
            <button disabled={!write} onClick={() => write?.()}>
            {t('funding.donate')}
            </button>
            {isLoading && <div>{t('auth.walletCheck')}</div>}
            {isSuccess && <Transaction>Transaction created</Transaction>}
            {isError && <div>ERR: {JSON.stringify(error)}</div>}
            </DonateForm>
    </Container><FlashyFlash> 

            

          {ev && <><Lightning/>
    <Success>{t('funding.statsDonated')}</Success>
    </>}
      </FlashyFlash></Main>
}

export default FundCreate