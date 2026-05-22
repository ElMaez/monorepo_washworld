import Image from "next/image";
import Imagesdf from "../../../public/assets/icons/circleplus.svg";



interface IconProps {
  iconName: string;
  style: string;
}


const Icon = ({ iconName, style }: IconProps) => {
  return (
    <>
    {iconName !== "" && (
        <Image alt="" width={"24"} height={"24"} src={`/assets/icons/${iconName}.svg`} className={`${style}`}></Image>
      )}
    </>
  );
};
export default Icon;