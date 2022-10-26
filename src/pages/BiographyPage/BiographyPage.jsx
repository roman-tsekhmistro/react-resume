import styles from "./biography-page.module.scss";
import Info from "../../components/common/Info";
import NavButtons from "../../components/NavBtns";

export default function BiographyPage() {
  return (
    <div className={styles.biography}>
      <Info
        title={"Welcome to Roman's blog!"}
        details={
          "I'm Roman, a Javascript engineer from Kharkov.\n" +
          "          I am passionate about website development, and I do programming at home for fun.\n" +
          "          Give me a good problem, and I will enjoy trying to find a solution."
        }
      />
      <NavButtons
        leftBtnLink={"/about"}
        leftBtnText={"About me"}
        rightBtnLink={"/skills"}
        rightBtnText={"My skills"}
      />
    </div>
  );
}
