import Icon, { type IconNames } from "@/icomoon/Icon";
import styles from "./styles.module.scss";

type IconTextProps = {
  icon: IconNames;
  text: string;
  size?: number;
  onClick?: () => void;
  icolor?: string;
  style?: React.CSSProperties;
};
const IconText = ({
  icon = "file-earmark-code",
  text = "Icon text",
  size = 12,
  icolor = "#ffffff",
  onClick,
  style,
}: IconTextProps) => {
  return (
    <div className={styles.iconText} onClick={onClick} style={style}>
      <Icon icon={icon} size={size} color={icolor} />
      <p>{text}</p>
    </div>
  );
};

export default IconText;
