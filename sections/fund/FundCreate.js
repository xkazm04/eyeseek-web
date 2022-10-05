import donator from '../../abi/donator.json'
import {useState} from 'react'
import { useTranslation  } from 'next-i18next';
import {useContractWrite, usePrepareContractWrite, useContractEvent, useNetwork} from 'wagmi'
import Subtitle from '../../components/typography/Subtitle'
import styled from 'styled-components'
import {NumInput} from '../../components/form/Input'

const Container = styled.div`
  padding: 5%;
  font-size: 1em;
`

const Warning = styled.div`
  color: red;
`

const Transaction = styled.div`
  word-wrap: break-word;
`

const FundCreate = () => {
  const { t } = useTranslation('common');
    // Upravit kontrakt, kdokoliv může založit, pouze admin verify -> Rozšířit enum
    const [ev, setEv] = useState(false)

    const useEv = (e) => {
      setEv(true)
      console.log(e)
    }

    const {chain} = useNetwork()
    const [fundAmount, setFundAmount] = useState(0)
    const handleFundAmount = (e) => {
        setFundAmount(e.target.value)
      }
        // Write hook
        const {config}  = usePrepareContractWrite({
            addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
            contractInterface: donator.abi,
            functionName: 'createFund',
            args: [fundAmount, 0],
          })
    
          const { data, isLoading, isSuccess, write } = useContractWrite(config)
    
      useContractEvent({
          addressOrName: process.env.NEXT_PUBLIC_AD_DONATOR,
          contractInterface: donator.abi,
          eventName: 'FundCreated',
          listener: (event) => useEv(event),
          once: true
        })

    return <Container>
        <Subtitle text={t('play.fundTitle')}/>
        {t('math.amount')} 
            <NumInput placeholder={t('play.fundCap')} onChange={handleFundAmount} min={0} ></NumInput>
            {chain && chain.name === 'Mumbai' ? <button disabled={!write} onClick={() => write?.()}>
            {t('play.fundCreate')}
            </button> : <Warning> {t('play.wrongMumbai')}</Warning>}
            {isLoading && <div>{t('play.walletCheck')}</div>}
            {isSuccess && <Transaction>{t('play.transaction')}: {JSON.stringify(data)}</Transaction>}
            {ev && <>{t('play.fundCreated')}</>}
    </Container>
}

export default FundCreate