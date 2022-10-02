import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import { useTranslation  } from 'next-i18next';
import sc from '../../public/charts/sc.png'
import charity from '../../public/charts/charity.png'
import userReg from '../../public/charts/userReg.png'
import userGroup from '../../public/charts/userGroup.png'
import HowToRow from '../../components/chart/HowToRow'
import Image from 'next/image';
import chainfund from '../../public/charts/chainfund.png'
import Explainer from '../../components/chart/Explainer'

const Kontejner = styled.div`
    width: 100%;
    padding: 5%;
    text-align: center;
    border: 1px solid white;
    background: rgba(45, 45, 45, 0.5);
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

const HeadBox = styled.div`
    text-align: left;
`

const Flex = styled.div`
    margin-top: 3%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const ExplainerBox = styled.div`
    width: 60%;
    margin-left: 5%;
    @media (max-width: 1068px) {
        display: none;
    }
`


const ExpFunding = () => {

const { t } = useTranslation('how');

  return ( 
  <Flex>
    <Kontejner>    

    <HeadBox><Subtitle text={t('title.funding')}/></HeadBox>   
   <HowToRow 
        step={t('fundingFirst.step')}
        img2src={sc} 
        img2alt={t('fundingFirst.img2alt')}
        img1src={charity}
        img1alt={t('fundingFirst.img1alt')}
        label1={t('fundingFirst.label1')}
        label2={t('fundingFirst.label2')}
        line1={t('fundingFirst.line1')} 
        line2={t('fundingFirst.line2')} 
        event2={t('fundingFirst.event2')}
    />

    <HowToRow
        step={t('fundingSecond.step')}
        img2src={sc} 
        img2alt={t('fundingSecond.img2alt')}
        img1src={userGroup}
        img1alt={t('fundingSecond.img1alt')}
        label2={t('fundingSecond.label2')}
        line1={t('fundingSecond.line1')} 
        line2={t('fundingSecond.line2')} 
        event2={t('fundingSecond.event2')}
    />

<HowToRow
        step={t('fundingThird.step')}
        img2src={sc} 
        img2alt={t('fundingThird.img2alt')}
        img1src={userReg}
        img1alt={t('fundingThird.img1alt')}
        label2={t('fundingThird.label2')}
        line1={t('fundingThird.line1')} 
        line2={t('fundingThird.line2')} 
        event1={t('fundingThird.event1')}
        event2={t('fundingThird.event2')}
        event3={t('fundingThird.event3')}
    />
  <Image src={chainfund} alt='chain funding' fill='responsive' />
    </Kontejner>

    <ExplainerBox>
        <Explainer 
            title={t('fundingExplainer.title')}
            p={t('fundingExplainer.p')}
            li1={t('fundingExplainer.li1')}
            li2={t('fundingExplainer.li2')}
            li3={t('fundingExplainer.li3')}
            li4={t('fundingExplainer.li4')}
        />
        </ExplainerBox>
</Flex>

  );
};

export default ExpFunding;