import styles from './social-link.module.scss'

export default function SocialLink({img, title, link}){
  return (
      <a target='_blank' rel="noreferrer" href={link}><img className={styles.link_img} src={img} alt={title}/></a>
  )
}