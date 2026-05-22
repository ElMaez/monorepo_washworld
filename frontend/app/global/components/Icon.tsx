
import { IconMap, IconNameType } from "./IconMap";

interface IconProps {
  iconName: string;
  style?: string;         
}

const Icon = ({ iconName, style = "" }: IconProps) => {
  // Look up the corresponding functional component from your warehouse map
  const SelectedSvg = IconMap[iconName as keyof typeof IconMap] as React.ElementType

  return (
    <SelectedSvg 
      className={`w-[24px] h-[24px] shrink-0 ${style}`} 
    />
  );
};

export default Icon;