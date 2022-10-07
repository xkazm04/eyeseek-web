import {useState} from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation  } from 'next-i18next';
import styled from 'styled-components'
import Image from 'next/image';
import Title from '../components/typography/Title';
import Subtitle from '../components/typography/Subtitle';
import Token1 from '../public/Token1.png'
import Eye10 from '../public/Eye10.png'
import LandingFire from '../public/LandingFire.png'
import LandingMoney from '../public/LandingMoney.png'
import {BuyIcon, FireIcon, MintIcon, SellIcon} from '../components/icons/LandingSet'
import Eye7 from '../public/Eye7.png'
import {motion} from 'framer-motion'
import TokenomicsSection from '../sections/TokenomicsSection';

export async function getStaticProps({locale}: { locale: string; }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'tokenomics'])),
    },
  };
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    align-items: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5%;
    padding-bottom: 4%;
`

const ImageBox = styled.div`
    width: 50%;
    height: 50%;
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

const TitleBox = styled.div`
    text-align: center;
`
const DescBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background: #140505;
    width: 60%;
    padding: 3%;
    border: 1px solid #B9B9B9;
    border-radius: 15px;
    margin-bottom: 15%;
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

const FireBox = styled.div`
    position: absolute;
    right: 0;
    margin-top: 20%;
    @media (max-width: 1068px) {
        display: none;
    }
`

const MoneyBox = styled.div`
    position: absolute;
    left: 50px;
    margin-top: 20%;
    @media (max-width: 1068px) {
        display: none;
    }
`
const Point = styled(motion.div)`
    font-family: 'Chill';
    font-weight: lighter;
    font-size: 1.3em;
    padding-top: 2px;
    margin-bottom: 3%;
    text-align: center;
    transition: 0.1s;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
    @media (max-width: 1068px) {
        font-size: 0.7em;
    }
`
const ActPoint = styled(Point)`
    font-weight: bold;
    &:hover{
        cursor: default;
        opacity: 1;
    }
`

const DescTitle = styled.div`
    font-family: 'Chill';
    font-weight: lighter;
    font-size: 1.5rem;
    margin-bottom: 1%;
    text-decoration: underline;
    @media (max-width: 1068px) {
        font-size: 0.9em;
    }
`

const DescDesc = styled.div`
    line-height: 1.2;
    @media (max-width: 1068px) {
        font-size: 0.7em;
    }
`

const ImgBox = styled.div`
    position: absolute;
    top: -20px;
    @media (max-width: 1068px) {
        display: none;
    }
`

const ImgSupBox = styled.div`
    position: absolute;
    right: 0;
    top: 0%;
`

const EyeBox = styled.div`
    margin: 10%;
     text-align: center;
    position: relative;
`



function Tokenomics() {
    const [pressPoint, setPressPoint] = useState('Expected buy/sell pressures');
    const [pressDesc, setPressDesc] = useState('Click on the points to see the description');
    const [pressImg, setPressImage] = useState('buy')
    const [supplyPoint, setSupplyPoint] = useState('Supply mechanisms')
    const [supplyDesc, setSupplyDesc] = useState('Click on the points to see the description')
    const [supplyImg, setSupplyImage] = useState('burn')

    const { t } = useTranslation('tokenomics');

    type PointProps = {
        func: Function,
        point: string,
        desc: string,
        im: string
    }

        // @ts-ignore
    const changePoint = (desc,point,im) => {
        setPressPoint(point)
        setPressDesc(desc)
        setPressImage(im)
    }

    // @ts-ignore
    const changeSupPoint = (desc,point,im) => {
        setSupplyPoint(point)
        setSupplyDesc(desc)
        setSupplyImage(im)
    }

    // @ts-ignore
    const PointComponent = ({func, point, desc, im}) => {
        return <>{pressPoint === point ? <ActPoint>{point}</ActPoint> : <Point 
        whileHover={{ scale: 0.98 }} 
        transition={{ type: "spring", stiffness: 500, damping: 3 }}
        onClick={()=>{func(desc,point,im)}}>{point}
        </Point>}</>
    }

    // @ts-ignore
    const PointSupComponent = ({func, point, desc, im}) => {
        return <>{supplyPoint === point ? <ActPoint>{point}</ActPoint> : <Point 
        whileHover={{ scale: 0.98 }} 
        transition={{ type: "spring", stiffness: 500, damping: 3 }}
        onClick={()=>{func(desc,point,im)}}>{point}
        </Point>}</>
    }

    return (
    <>
        <Container>
            <TitleBox><Title text={t('pressure.head')}/></TitleBox>
            <Main>
                <Container>
                    <Subtitle text={t('pressure.title1')}/>
                        <PointComponent func={changePoint} point={t('pressure.point1')} desc={t('pressure.desc1')} im={'buy'} />
                        <PointComponent func={changePoint} point={t('pressure.point2')} desc={t('pressure.desc2')} im={'buy'}/>
                        <PointComponent func={changePoint} point={t('pressure.point3')} desc={t('pressure.desc3')} im={'buy'}/>
                        <PointComponent func={changePoint} point={t('pressure.point4')} desc={t('pressure.desc4')} im={'buy'}/>
                </Container>
             <Container>  
             <ImageBox><Image
                src={Token1}
                alt="token1"
            /></ImageBox>
             </Container>   
                <Container>
                <Subtitle text={t('pressure.title2')}/>
                    <PointComponent func={changePoint} point={t('pressure.point5')} desc={t('pressure.desc5')} im={'sell'} />
                    <PointComponent func={changePoint} point={t('pressure.point6')} desc={t('pressure.desc6')} im={'sell'} />
                    <PointComponent func={changePoint} point={t('pressure.point7')} desc={t('pressure.desc7')} im={'sell'} />
                </Container> 
            </Main>
            <DescBox>
                <ImgBox>{pressImg === 'sell' && <SellIcon width={20} height={100}/>} {pressImg === 'buy' && <BuyIcon width={20} height={100} />} </ImgBox>

                <DescTitle>{pressPoint}</DescTitle> 
                
                    <DescDesc>{pressDesc}</DescDesc>
                
                </DescBox>
        </Container>

        <Container>
        <TitleBox><Title text={t('supply.head')}/></TitleBox>
            <FireBox><Image            
                src={LandingFire}
                alt="LandingFire"
                width={'210%'}
                height={'150%'}
            />
            </FireBox>
            <MoneyBox><Image            
                src={LandingMoney}
                alt="LandingMoney"
                width={'150%'}
                height={'150%'}
            />
            </MoneyBox>
            <Main>
            <Container>
                    <Subtitle text={t('supply.title1')}/>
                        <PointSupComponent func={changeSupPoint} point={t('supply.point1')} desc={t('supply.desc1')} im='mint'/>
                </Container>
             <Container>  
             <ImageBox><Image
                src={Eye10}
                alt="Eye10"
            /></ImageBox>
             </Container>   
             <Container>
                    <Subtitle text={t('supply.title2')}/>
                        <PointSupComponent func={changeSupPoint} point={t('supply.point2')} desc={t('supply.desc2')} im='burn'  />
                        <PointSupComponent func={changeSupPoint} point={t('supply.point3')} desc={t('supply.desc3')} im='burn' />
                </Container>
            </Main>
            <DescBox>
                <ImgSupBox>
                    {supplyImg === 'burn' && <FireIcon width={50} />}
                    {supplyImg === 'mint' && <MintIcon width={40} />}
                
                
                </ImgSupBox>
                <DescTitle>{supplyPoint}</DescTitle> 
                <DescDesc>{supplyDesc}</DescDesc>
                
                </DescBox>

                <TokenomicsSection/>

        <EyeBox><Image
            src={Eye7}
            alt="Eye7"
            width={'600%'}
            height={'70%'}
            />
            </EyeBox>
        </Container>
    </>
    );
}


export default Tokenomics;