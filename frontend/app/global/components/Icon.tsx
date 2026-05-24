
import { IconMap, IconNameType } from "./IconMap";

interface IconProps {
  iconName: string;
  style?: string;
  size?: "lg" | "sm";         
}

const Icon = ({ iconName, style = "", size }: IconProps) => {
  // Look up the corresponding functional component from iconMap
  const SelectedSvg = IconMap[iconName as keyof typeof IconMap] as React.ElementType

  return (
    <SelectedSvg 
      className={`${size === "lg"? "w-[100px] h-[100px]":"w-[24px] h-[24px]"} shrink-0 ${style}`} 
    />
  );
};

export default Icon;