import Info from "../../components/common/Info";
import styles from "./about-me.module.scss";
import NavButtons from "../../components/NavBtns";

export default function AboutMe() {
  return (
    <div className={styles.about_me}>
      <Info
        title={"About"}
        details={
          "I'm Roman, a Junior Javascript engineer from Kharkov. " +
          "I graduated from technical college and it helps me to understand the problem deeper and develop an algorithm for solving the problem. " +
          "I do not stop self-study and take various courses on Front-End Development. " +
          "I dream of joining a team in which I will improve my skills every day as a professional, since I approve of any criticism in my direction."
        }
      />

      <NavButtons
        leftBtnLink={"/"}
        leftBtnText={"Biography"}
        rightBtnLink={"/skills"}
        rightBtnText={"My skills"}
      />
    </div>
  );
}
