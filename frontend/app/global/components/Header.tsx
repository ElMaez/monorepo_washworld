import Button from "./Button";
import { ButtonProps } from "./Button";

interface HeaderProps {
 title: string;

 backButton?: ButtonProps;
 rightButton?: ButtonProps;
}



const Header = ({title, backButton, rightButton}:HeaderProps) => {

    return(
        <header className="fullbleed uppercase border-b-grey-200 border-b py-6">
            <div className="grid grid-cols-3 grid-rows-1 items-center w-full">
            <>{backButton && <Button {...backButton} />}</>
            <h1 className="justify-self-center col-start-2">{title}</h1>
            {rightButton ? <div className="justify-self-end col-start-3">{rightButton && <Button {...rightButton} />}</div> :""}
            </div>
        </header>
    )
}
export default Header;