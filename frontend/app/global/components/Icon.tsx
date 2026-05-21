import Image from "next/image";



interface IconProps {
  IconName: string;
}


const Icon = ({ IconName }: IconProps) => {
  return (
    <>
    {IconName === "circleplus" && (
        <button className="bg-success text-surface p-4">
            <Image alt="" width={"500"} height={"500"} src={`../../public/icons/${IconName}`}></Image>
          This only shows for ${IconName}!
        </button>
      )}
    </>
  );
};
export default Icon;