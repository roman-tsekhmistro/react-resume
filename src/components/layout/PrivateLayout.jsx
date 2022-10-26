import styles from './private-layout.module.scss';
import Avatar from '../common/Avatar';
import LinkList from '../LinkList';

export default function PrivateLayout(props){
  return(
<div className={styles.private_layout}>
  <div className={styles.wrapper}>
    <Avatar/>
    <LinkList/>
  </div>
  <div className={styles.content}>{props.children}</div>
</div>
  )
}