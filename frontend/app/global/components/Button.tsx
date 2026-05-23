import Icon from "./Icon";


interface ButtonProps {
  buttonName: string;
  size: string;
  isSecondary?: boolean;
  isTertiary?:boolean;
  iconName?: string;
  iconFlexPos?: string;
}


const Button = ({ buttonName, size, isSecondary, isTertiary, iconName, iconFlexPos }: ButtonProps) => {

  const primary = "bg-primary-400 text-grey-400 border-b-2 border-primary-800"
  const secondary = "border-2 border-primary-100 bg-primary-50 text-primary-800"
  const tertiary = "border-b-2 border-primary-800 text-primary-800"

  return (
    <button
    className={`h-fit rounded-2 uppercase flex gap-8 justify-center cursor-pointer font-bold
    ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}
    ${isSecondary === true ? `${secondary}` : `${primary}`}
    ${isTertiary === true ? `${tertiary}` : `${primary}`}`}>
      {buttonName}
      {iconName ? <Icon iconName={iconName} style={`${iconFlexPos ? `${iconFlexPos}` : ""}`}></Icon> : ""}
    </button>

  );
};
export default Button;