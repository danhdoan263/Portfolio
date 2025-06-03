import { useState } from "react";
import styles from "./styles.module.scss";
import IconContainer from "@/components/IconContainer/IconContainer";
import { data, type DataMockup } from "@/mock/Data";
import TabShowContent from "@/components/TabShowContent/TabShowContent";
const About = () => {
  const [dataShow, setDataShow] = useState<DataMockup | null>(null);
  console.log('dataShow', dataShow);
  return (
    <div className={styles.about}>
      <div className={styles.about__left}>
        {data.map((item) => {
          return <IconContainer data={item} setDataShow={setDataShow} key={item.id}/>;
        })}
      </div>
      <div className={styles.about__right}>
        <TabShowContent dataShow={dataShow}/>
      </div>
    </div>
  );
};
export default About;
