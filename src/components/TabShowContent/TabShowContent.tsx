import styles from "./styles.module.scss";
import type { DataMockup } from "@/mock/Data";
type TabShowContentProps = {
  dataShow: DataMockup | null;
};
const TabShowContent = ({ dataShow }: TabShowContentProps) => {
  console.log(dataShow);
  return (
    <div className={styles.tabShowContent}>
      <div className={styles.tabShowContent__header}>{dataShow?.title}</div>
      <div className={styles.tabShowContent__content}></div>
    </div>
  );
};

export default TabShowContent;
