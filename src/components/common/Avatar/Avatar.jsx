import AvatarImg from '../../../assets/images/avatar.jpg'
import styles from './avatar.module.scss'

export default function Avatar(){
  return(
      <img className={styles.img} src={AvatarImg} alt="Avatar"/>
  )
}