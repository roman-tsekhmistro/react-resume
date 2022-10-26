import NavButtons from "../../components/NavBtns";
import Info from "../../components/common/Info";
import SkillList from "../../components/SkillList";

export default function Skills() {
  return (
    <>
      <Info title={"My skills:"} details={<SkillList />} />
      <NavButtons
        leftBtnLink={"/about"}
        leftBtnText={"About me"}
        rightBtnLink={"/"}
        rightBtnText={"Biography"}
      />
    </>
  );
}
