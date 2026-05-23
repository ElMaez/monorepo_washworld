import Button from "./Button";
import { ButtonProps } from "./Button";

interface HeaderProps {
 title: string;

 leftButton?: ButtonProps;
 rightButton?: ButtonProps;
}



const Header = ({title, leftButton, rightButton}:HeaderProps) => {

    return(
        <header className="fullbleed uppercase border-b-grey-200 border-b py-6">
            <div className="grid grid-cols-3 grid-rows-1 items-center w-full">
            <>{leftButton && <Button {...leftButton} />}</>
            <h1 className="justify-self-center">{title}</h1>
            {rightButton ? <div className="justify-self-end">{rightButton && <Button {...rightButton} />}</div> :""}
            </div>
        </header>
    )
}
export default Header;