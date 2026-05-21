

interface ButtonProps {
  buttonName: string;
  size: string;
}


const PrimaryButton = ({ buttonName, size }: ButtonProps) => {
  return (
    <>
    <button
    className={`h-fit rounded-2 uppercase bg-primary-400 text-grey-400 border-b-2 border-primary-800 ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}`}>
    {buttonName}
    </button>
    </>
  );
};
export default PrimaryButton;