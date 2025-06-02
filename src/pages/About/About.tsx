import { useState } from "react";
import styles from "./styles.module.scss";
import IconContainer from "@/components/IconContainer/IconContainer";
import type { DataMockup } from "@/mock/Data";
import TabShowContent from "@/components/TabShowContent/TabShowContent";
const About = () => {
  const [dataShow, setDataShow] = useState<DataMockup | null>(null);
  console.log(dataShow);
  return (
    <div className={styles.about}>
      <div className={styles.about__left}>
        <IconContainer setDataShow={setDataShow} />
      </div>
      <div className={styles.about__right}>
        <TabShowContent dataShow={dataShow} />
      </div>
    </div>
  );
};
export default About;
