
import styled from 'styled-components'
import { useTranslation  } from 'next-i18next';
import {DiscordIcon, EmailIcon, MediumIcon, TwitterIcon} from '../components/icons/Socials'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 5%;
    margin-bottom: 2%;
    margin-top: 2%;
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterItem = styled.div`
    display: flex;  
    transition: 0.1s;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    font-size: 1em;
    font-family: 'NoBill';
    font-style: normal;
    letter-spacing: 1px;
    color: #B0F6FF;
    @media (max-width: 768px) {
     font-size: 0.8em;
    }
`



const HeadSection = () => {

    const { t } = useTranslation('common');

    return <><Container>

        <FooterSection>
                <FooterItem><EmailIcon width={50}/>{t('footer.socialEmail')}</FooterItem>
        </FooterSection>
        <FooterSection>
                <FooterItem><DiscordIcon width={30}/>{t('footer.socialDiscord')}</FooterItem>
        </FooterSection>
        <FooterSection>
                <FooterItem><TwitterIcon width={30}/>{t('footer.socialTwitter')}</FooterItem>
        </FooterSection>
        <FooterSection>
                <FooterItem><MediumIcon width={30}/>{t('footer.socialMedium')}</FooterItem>
        </FooterSection>
        </Container></>
}




export default HeadSection