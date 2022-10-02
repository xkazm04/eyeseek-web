
import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import Subtitle from '../../components/typography/Subtitle';
import Image from 'next/image';
import Eye9 from '../../public/Eye9.png'
import {motion} from 'framer-motion'

const Container = styled.div`
    background: linear-gradient(180deg, rgba(22, 0, 0, 0) 50%, rgba(22, 0, 0, 0.75)  100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    margin-top: 15%;
    padding-bottom: 20%;
    @media (max-width: 1068px) {
        display: none;
    }
`

const Circle = styled(motion.div)`
    height: 12px;
    width: 12px;
    background: white;
    box-shadow: 0px 2px 15px white, inset 0px 1px 3px white;
    border-radius: 45px;
`


const TitleBox = styled.div`
    padding-left: 10%;
    bottom: 100px;
    text-align: left;
    align-self: flex-start;
`

const Timeline = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
    height: 2px;
    background: #004207;
`

const MileTitle = styled.div`
    font-family: 'Staatliches';
    text-align: left;
    letter-spacing: 0.8px;
    font-size: 2em;
    color: #B0F6FF;
    margin-bottom: 2%;
`

const MileLi = styled.li`
    font-family: 'Roboto';
    font-weight: 500;
    text-align: left;
    margin: 1%;
    margin-left: 7%;
`

const O = styled.div`
    position: relative;
`

const Line = styled.div`
    position: absolute;
    height: 200px;
    width: 2px;
    background: white;
    left: 5px;
`

const UpLine = styled(Line)`
    top: -200px;
`

const Milestone = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 30px;
    top: 50px;
    width: 400px;
`

const UpMilestone = styled(Milestone)`
    top: -250px;
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -30px;
    width: 100px;
    color: #5E82DF;
    font-weight: 500;
    font-size: 1.2em;
`

const UpDate = styled(Date)`
    top: 30px;
`

const ImageBox = styled.div`
  position: absolute; 
  z-index: -1;
`


const RoadmapSection = () => {

    const { t } = useTranslation('common');

    return <><Container>

       <TitleBox> <Subtitle  text={t('landing.roadmap')}/></TitleBox>

<Timeline>
        <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/> 
        <Line/><Date>{t('roadmap.q1date')}</Date><Milestone><MileTitle>{t('roadmap.q1title')}</MileTitle>
            <MileLi>{t('roadmap.q1point1')}</MileLi>
            <MileLi>{t('roadmap.q1point2')}</MileLi>
            <MileLi>{t('roadmap.q1point3')}</MileLi>
            <MileLi>{t('roadmap.q1point4')}</MileLi>
            <MileLi>{t('roadmap.q1point5')}</MileLi>
        </Milestone>
    </O>
    <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/>  
    <UpLine/> <UpDate>{t('roadmap.q2date')}</UpDate><UpMilestone><MileTitle>{t('roadmap.q2title')}</MileTitle>
        <MileLi>{t('roadmap.q2point1')}</MileLi>
            <MileLi>{t('roadmap.q2point2')}</MileLi>
            <MileLi>{t('roadmap.q2point3')}</MileLi>
            <MileLi>{t('roadmap.q2point4')}</MileLi>
            <MileLi>{t('roadmap.q2point5')}</MileLi>
        </UpMilestone></O>

        <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/> 
        <Line/><Date>{t('roadmap.q3date')}</Date><Milestone><MileTitle>{t('roadmap.q3title')}</MileTitle>
        <MileLi>{t('roadmap.q3point1')}</MileLi>
            <MileLi>{t('roadmap.q3point2')}</MileLi>
            <MileLi>{t('roadmap.q3point3')}</MileLi>
            <MileLi>{t('roadmap.q3point4')}</MileLi>
            <MileLi>{t('roadmap.q3point5')}</MileLi>
        </Milestone>
    </O>
    <ImageBox>
              <Image src={Eye9} alt="Eye9" fill='full' />
            </ImageBox>

    <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/> 
     <UpLine/> <UpDate>{t('roadmap.q4date')}</UpDate><UpMilestone><MileTitle>{t('roadmap.q4title')}</MileTitle>
    <MileLi>{t('roadmap.q4point1')}</MileLi>
            <MileLi>{t('roadmap.q4point2')}</MileLi>
            <MileLi>{t('roadmap.q4point3')}</MileLi>
            <MileLi>{t('roadmap.q4point4')}</MileLi>
            <MileLi>{t('roadmap.q4point5')}</MileLi>
        </UpMilestone></O>

        <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/> 
     <Line/><Date>{t('roadmap.q5date')}</Date><Milestone><MileTitle>{t('roadmap.q5title')}</MileTitle>
        <MileLi>{t('roadmap.q5point1')}</MileLi>
            <MileLi>{t('roadmap.q5point2')}</MileLi>
            <MileLi>{t('roadmap.q5point3')}</MileLi>
            <MileLi>{t('roadmap.q5point4')}</MileLi>
            <MileLi>{t('roadmap.q5point5')}</MileLi>
        </Milestone>
    </O>
    <O><Circle whileHover={{ scale: 2 }}  transition={{ type: "spring", stiffness: 500, damping: 3 }}/>  <UpLine/></O>
</Timeline>

        </Container></>
}

export default RoadmapSection