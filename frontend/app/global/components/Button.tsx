import Icon from "./Icon";
import { IconNameType } from "./IconMap";


interface ButtonProps {
  buttonName: string;
  size: string;
  isSecondary: boolean;
  isTertiary:boolean;
  iconName?: IconNameType;
  iconFlexPos?: string;
  isPage: string;
  maxPage:string;
  iconStyle:string;
}


const Button = ({ buttonName, size, isSecondary, isTertiary, iconName, iconFlexPos, isPage, maxPage, iconStyle }: ButtonProps) => {

  const primary = "bg-primary-400 text-grey-400 border-b-2 border-primary-800"
  const secondary = "border-2 border-primary-100 bg-primary-50 text-primary-800"
  const tertiary = "border-b-2 border-primary-800 text-primary-800"

  let buttonStyle = primary;
  if (isSecondary) buttonStyle = secondary;
  if (isTertiary) buttonStyle = tertiary;


  return (
    <div  className="flex items-center gap-8">
    <button
    className={`h-fit rounded-2 uppercase flex gap-8 justify-center color-primary-800
    ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}
    ${buttonStyle}`}>
      <p>{buttonName}</p>
      {iconName && (<Icon iconName={iconName} style={`${iconFlexPos} ${iconStyle}`} />)}
    </button>
      {isPage ? <p className="">{isPage}/{maxPage}</p> : ""}
    </div>
  );
};
export default Button;