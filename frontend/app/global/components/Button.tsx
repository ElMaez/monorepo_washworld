import Icon from "./Icon";
import { IconNameType } from "./IconMap";


interface ButtonProps {
  buttonName: string;
  size: string;
  iconName?: IconNameType;
  iconFlexPos?: string;
  isPage: string;
  maxPage:string;
  iconStyle:string;
  type: "primary" | "secondary" | "tertiary";
  status: "danger" |"success" | "normal";
}


const Button = ({ buttonName, size, type, status, iconName, iconFlexPos, isPage, maxPage }: ButtonProps) => {

  let normal = "border-primary-800 text-primary-800"
  let danger = "border-danger text-danger"
  let success = "border-success text-success"

  let primary = "bg-primary-400 text-grey-400 border-b-2 border-primary-800 color-bg-dark"
  let secondary = "border-2 border-primary-100 bg-primary-50 text-primary-800"

  let statusStyle = `${normal}`, iconStyle = "text-bg-black"
  if (status== "danger") statusStyle = `${danger}`, iconStyle = `text-danger`
  if (status== "success") statusStyle = `${success}`, iconStyle = `text-success`
  
  let tertiary = `border-b-2 border-${statusStyle} text-${statusStyle}`

  let buttonStyle = `${primary}`
  if (type === "secondary") buttonStyle = `${secondary}`;
  if (type === "tertiary") buttonStyle = `${tertiary}`;


  return (
    <div  className="flex items-center gap-8">
    <button
    className={`h-fit rounded-2 uppercase flex gap-8 justify-center font-bold
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