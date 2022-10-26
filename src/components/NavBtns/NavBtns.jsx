import LinkBtn from "../common/LinkBtn";
import styles from "./nav-btns.module.scss";

export default function NavButtons({
  leftBtnLink,
  leftBtnText,
  rightBtnLink,
  rightBtnText,
}) {
  return (
    <div className={styles.nav_buttons}>
      <LinkBtn routerLink={`${leftBtnLink}`} linkText={leftBtnText} />
      <LinkBtn routerLink={`${rightBtnLink}`} linkText={rightBtnText} />
    </div>
  );
}
