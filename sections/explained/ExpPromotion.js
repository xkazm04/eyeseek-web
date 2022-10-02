import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import { useTranslation  } from 'next-i18next';
import sc from '../../public/charts/sc.png'
import business from '../../public/charts/business.png'
import userMob from '../../public/charts/userMob.png'
import HowToRow from '../../components/chart/HowToRow'
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
    margin-right: 5%;
    @media (max-width: 1068px) {
        display: none;
    }
`


const ExpPromotion = () => {

const { t } = useTranslation('how');

  return ( 
  <Flex>
        <ExplainerBox>
        <Explainer 
            title={t('promExplainer.title')}
            p={t('promExplainer.p')}
            li1={t('promExplainer.li1')}
            li2={t('promExplainer.li2')}
            li3={t('promExplainer.li3')}
        />
        </ExplainerBox>
    <Kontejner>    

    <HeadBox><Subtitle text={t('title.prom')}/></HeadBox>   
   <HowToRow 
        step={t('promFirst.step')}
        img2src={sc} 
        img2alt={t('promFirst.img2alt')}
        img1src={business}
        img1alt={t('promFirst.img1alt')}
        label1={t('promFirst.label1')}
        label2={t('promFirst.label2')}
        line1={t('promFirst.line1')} 
        line2={t('promFirst.line2')} 
        event2={t('promFirst.event2')}
        event3={t('promFirst.event3')}
    />

    <HowToRow
        step={t('promSecond.step')}
        img2src={sc} 
        img2alt={t('promSecond.img2alt')}
        img1src={userMob}
        img1alt={t('promSecond.img1alt')}
        label2={t('promSecond.label2')}
        line1={t('promSecond.line1')} 
        line2={t('promSecond.line2')} 
        event1={t('promSecond.event2')}
        event3={t('promSecond.event3')}
    />
    </Kontejner>

</Flex>

  );
};

export default ExpPromotion;