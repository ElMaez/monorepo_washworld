import Image from "next/image";
import Imagesdf from "../../../public/assets/icons/circleplus.svg";



interface IconProps {
  IconName: string;
}


const Icon = ({ IconName }: IconProps) => {
  return (
    <>
    {IconName !== "" && (
        <Image alt="" width={"500"} height={"500"} src={`/assets/icons/${IconName}.svg`}></Image>
      )}
    </>
  );
};
export default Icon;