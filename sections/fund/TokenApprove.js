import token from '../../abi/token.json'
import {useState} from 'react'
import { useTranslation } from 'next-i18next'
import {useContractWrite, usePrepareContractWrite} from 'wagmi'
import Subtitle from '../../components/typography/Subtitle'
import styled from 'styled-components'
import { NumInput } from '../../components/form/Input'

const Container = styled.div`
  padding: 5%;
`

const TokenApprove = () => {
  const { t } = useTranslation('common');

    const [apprAmount, setApprAmount] = useState(0)
    const handleApproval = (e) => {
      setApprAmount(e.target.value)
      }
        // Write hook
        const {config, error}  = usePrepareContractWrite({
            addressOrName: process.env.NEXT_PUBLIC_AD_TOKEN,
            contractInterface: token.abi,
            functionName: 'approve',
            args: [process.env.NEXT_PUBLIC_AD_DONATOR, apprAmount],
          })
    
          const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return <Container>
        <Subtitle text={t('play.approvalTitle')}/>
        {t('play.approvalNotice')}
            <NumInput type={'number'} placeholder={t('play.approvalAmount')} onChange={handleApproval}></NumInput>
            <button disabled={!write} onClick={() => write?.()}>
            {t('play.approve')}
            </button>
            {error && (
        <div>{t('play.transactionError')}{error.code}</div>
      )}
            {isLoading && <div>{t('play.walletCheck')}</div>}
            {isSuccess && <div>Tx: {JSON.stringify(data)}</div>}
    </Container>
}

export default TokenApprove