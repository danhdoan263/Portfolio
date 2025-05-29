import IcoMoon, { type IconProps } from "react-icomoon";
import iconSet from "./selection.json";

export type IconNames = "facebook" | "linkedin" | "github";

interface CustomIconProps extends Omit<IconProps, "icon"> {
  icon: IconNames;
}

const Icon = (props: CustomIconProps) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;
