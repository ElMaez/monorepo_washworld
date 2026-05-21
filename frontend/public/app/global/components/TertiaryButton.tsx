interface ButtonProps {
  buttonName: string;
  size: string;
}


const TertiaryButton = ({ buttonName, size }: ButtonProps) => {
  return (
    <>
    <button
    className={`h-fit uppercase border-b-2 border-primary-800 text-primary-800 ${size ==='lg' ? 'w-full py-8' : 'w-fit p-8'}`}>
    {buttonName}
    </button>
    </>
  );
};
export default TertiaryButton;