import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import { useTranslation  } from 'next-i18next';
import sc from '../../public/charts/sc.png'
import userMob from '../../public/charts/userMob.png'
import help from '../../public/charts/help.png'
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
    margin-left: 5%;
    @media (max-width: 1068px) {
        display: none;
    }
`


const ExpHelp = () => {

const { t } = useTranslation('how');

  return ( 
  <Flex>
    <Kontejner>    

    <HeadBox><Subtitle text={t('title.help')}/></HeadBox>   
   <HowToRow 
        step={t('helpFirst.step')}
        img2src={sc} 
        img2alt={t('helpFirst.img2alt')}
        img1src={help}
        img1alt={t('helpFirst.img1alt')}
        label1={t('helpFirst.label1')}
        label2={t('helpFirst.label2')}
        line1={t('helpFirst.line1')} 
        line2={t('helpFirst.line2')} 
        event1={t('helpFirst.event2')}
        event3={t('helpFirst.event3')}
    />

    <HowToRow
        step={t('helpSecond.step')}
        img2src={sc} 
        img2alt={t('helpSecond.img2alt')}
        img1src={userMob}
        img1alt={t('helpSecond.img1alt')}
        label2={t('helpSecond.label2')}
        line1={t('helpSecond.line1')} 
        line2={t('helpSecond.line2')} 
        event1={t('helpSecond.event2')}
        event3={t('helpSecond.event3')}
    />
    </Kontejner>

    <ExplainerBox>
        <Explainer 
            title={t('helpExplainer.title')}
            p={t('helpExplainer.p')}
            li1={t('helpExplainer.li1')}
            li2={t('helpExplainer.li2')}
            li3={t('helpExplainer.li3')}
        />
        </ExplainerBox>
</Flex>

  );
};

export default ExpHelp;