"use client"
import Link from "next/link";
import Icon from "./Icon";
import { IconNameType } from "./IconMap";
import { useRouter } from "next/navigation";


export interface ButtonProps {
  elementType: "link" |"button";
  goBack?: boolean;
  linkHref?: string;
  buttonName?: string;
  size: string;
  iconName?: IconNameType;
  iconFlexPos?: string;
  isPage?: string;
  maxPage?:string;
  iconStyle?:string;
  type: "primary" | "secondary" | "tertiary"| "none";
  status: "danger" |"success" | "normal";
}


const Button = ({ elementType,linkHref,goBack, size, type, status,buttonName, iconName, iconFlexPos, isPage, maxPage }: ButtonProps) => {

  const router = useRouter();

  let normal = "border-primary-800 text-primary-800"
  let danger = "border-danger text-danger"
  let success = "border-success text-success"

  let primary = "bg-primary-400 text-grey-400 border-b-2 border-primary-800 text-bg-dark"
  let secondary = "border-2 border-primary-100 bg-primary-50 text-primary-800"
  let none = "text-primary-800"

  let statusStyle = `${normal}`, iconStyle = "text-bg-black"
  if (status== "danger") statusStyle = `${danger}`, iconStyle = `text-danger`
  if (status== "success") statusStyle = `${success}`, iconStyle = `text-success`
  
  let tertiary = `border-b-2 ${statusStyle}`

  let buttonStyle = `${primary}`
  if (type === "secondary") buttonStyle = `${secondary}`;
  if (type === "tertiary") buttonStyle = `${tertiary}`;
  if (type === "none") buttonStyle = `${none}`;
  

  return (
    <div  className={`flex items-center gap-8 ${size ==='lg' ? 'w-full' : 'w-fit'}`}>
    {elementType === "button" ?
    <>
    <button
    className={`h-fit rounded-2 uppercase flex justify-center font-bold
    ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}
    ${buttonStyle}
    ${iconName && buttonName ? "gap-8":""}`}>
      <p>{buttonName}</p>
      {iconName && (<Icon iconName={iconName} style={`${iconFlexPos} ${iconStyle}`} />)}
    </button>
      {isPage && maxPage ? <p className="">{isPage}/{maxPage}</p> : ""} 
      </>: <>
    <Link
    href={linkHref || "#"}
    onClick={
    goBack? (e) => {e.preventDefault(); router.back();}: undefined} /*This prevents conflicting navigation behavior.*/
    className={`h-fit rounded-2 uppercase flex justify-center font-bold
    ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}
    ${buttonStyle}
    ${iconName && buttonName ? "gap-8":""}`}>
      <p>{buttonName}</p>
      {iconName && (<Icon iconName={iconName} style={`${iconFlexPos} ${iconStyle}`} />)}
    </Link>
      {isPage && maxPage ? <p className="">{isPage}/{maxPage}</p> : ""} 
      </>
    }
    </div>
  );
};
export default Button;


/* COPY THIS IF YOU NEED:
<Button  elementType="" goBack={} linkHref="" buttonName="" size="" iconName="" iconFlexPos="" isPage="" maxPage="" iconStyle="" type="" status=""/>
*/