import {useState} from 'react'
import FundCreate from '../fund/FundCreate';
import FundDisplay from '../fund/FundDisplay';
import MicroCreate from '../fund/MicroCreate';
import Stepper from '../../components/form/Stepper';
import styled from 'styled-components';
import TokenApprove from '../fund/TokenApprove'

const Mid = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
`

const Right = styled.div`
    width: 40%;
    min-width: 400px;
    background: rgba(26, 26, 26, 0.7);
    max-height: 50%;
    padding: 2%;
    border-radius: 15px;
    border: 1px solid #686868;
`

const FundBox = styled.div`
    display: flex;
    border-radius: 15px;
    margin-top: 15%;
    padding: 2px;
    border: 4px solid white;
    width: 300px;
    height: 500px;
`

const PlayFunding = () => {
    const [step, setStep] = useState(1)
    const stepIncrement = () => {
        setStep(step + 1)
      }
  
      const stepDecrement = () => {
        setStep(step - 1)
      }
  
    return <> 
         <Mid><Stepper increment={stepIncrement} decrement={stepDecrement} steps={3} step={step} />  
         <FundBox>
            {step === 1 && <FundCreate/>}
            {step === 2 && <TokenApprove/>}
            {step === 3 && <MicroCreate/>}
        </FundBox></Mid>
         <Right><FundDisplay/></Right></>
}

export default PlayFunding