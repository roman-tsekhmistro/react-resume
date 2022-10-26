import styles from "./skill-list.module.scss";

export default function SkillList() {
  return (
    <ul className={styles.skill_list}>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>SASS(SCSS)</li>
      <li>styled-components</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>React-router</li>
      <li>Redux</li>
      <li>Redux-thunk</li>
      <li>Webpack</li>
      <li>Git</li>
      <li>Git flow</li>
      <li>Figma</li>
      <li>Jira</li>
    </ul>
  );
}
