import Image from "next/image";
import Icon from "./Icon";


interface ButtonProps {
  buttonName: string;
  size: string;
}


const SecondaryButton = ({ buttonName, size }: ButtonProps) => {
  return (
    <>
    <button
    className={`h-fit rounded-2 uppercase border-2 border-primary-100 bg-primary-50 text-primary-800 ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}`}>
    <Icon IconName="circleplus"></Icon>
    {buttonName}
    </button>
    </>
  );
};
export default SecondaryButton;