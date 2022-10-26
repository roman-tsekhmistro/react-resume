import SocialLink from '../common/SocialLink';
import GithubIcon from '../../assets/images/github.png';
import LinkedInIcon from '../../assets/images/linkedin.png';
import TelegramIcon from '../../assets/images/telegram.png';
import EmailIcon from '../../assets/images/email.png';
import styles from './link-list.module.scss'

export default function LinkList() {
  return (
      <ul className={styles.link_list}>
        <SocialLink img={GithubIcon} title='Github' link={'https://github.com/roman-tsekhmistro'}/>
        <SocialLink img={LinkedInIcon} title='LinkedIn' link={'https://www.linkedin.com/in/roman-tsekhmistro-02298920a/'}/>
        <SocialLink img={TelegramIcon} title='Telegram' link={'https://t.me/roman_tsekhmistro'}/>
        <SocialLink img={EmailIcon} title='Email' link={'mailto:romantsdev@gmail.com'}/>
      </ul>
  );
}