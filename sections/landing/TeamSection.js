
import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import Image from 'next/image'
import MK from '../../public/MK.png'
import Title from '../../components/typography/Title';
import { LinkedIcon } from '../../components/icons/Socials';
import Eye8 from '../../public/Eye8.png'
import LButton from '../../components/buttons/LButton';

const Container = styled.div`
    font-size: 1.2em;
    font-family: 'Gemunu Libre', sans-serif;
    padding: 3%;
`

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleBox = styled.div`
    position: absolute;
    padding-left: 17%;
`

const Team = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 10%;
`

const EyeBox = styled.div`
    position: absolute;
    right: 0;
    margin-top: 30%;
`

const FollowUp = styled.div`
    display: flex;
    flex-direction: column;
`


const TeamSection = () => {

    const { t } = useTranslation('common');

    return <><Container>
       <TitleBox> <Title  text={t('landing.team')}/></TitleBox>
       <Team>
        <ImageBox><Image src={MK} alt="MK" />
            <div>Michal Každan</div>
            <div>{t('landing.teamOverseer')}</div>
            <a href='https://www.linkedin.com/in/michalkazdan' target="_blank" rel="noopener noreferrer"><LinkedIcon width='30px'/></a>
            </ImageBox>
            <FollowUp><Title text='++ It could be y👁️u'/>
            <a href="mailto: eyeseek@proton.me"> <LButton text={'Feel free to contact'}/></a></FollowUp>
            <EyeBox><Image src={Eye8} alt="Eye8" width={'300%'} height={'370%'} />
            </EyeBox>
        </Team>

        </Container></>
}

export default TeamSection