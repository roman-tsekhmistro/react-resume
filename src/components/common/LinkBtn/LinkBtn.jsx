import {Link} from 'react-router-dom';
import styles from './link-btn.module.scss'

export default function LinkBtn({routerLink, linkText}){
  return(
      <Link className={styles.link} to={`${routerLink}`}>{linkText}</Link>
  )
}