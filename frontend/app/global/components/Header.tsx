import Button from "./Button";
import { ButtonProps } from "./Button";
import Snackbar from "./Snackbar";

interface HeaderProps {
 title: string;

 backButton?: ButtonProps;
 rightButton?: ButtonProps;
}

// ${backButton ? "grid-cols-3 grid-rows-1 items-center" : "col-span-2 "}

const Header = ({title, backButton, rightButton}:HeaderProps) => {

    return(
        <>
        <header className="fullbleed uppercase border-b-grey-200 border-b py-6">
            <section className={`grid items-center ${backButton ? "grid-cols-3 grid-rows-1 items-center" : "col-span-2 grid-cols-1 grid-rows-1"}`}>
            {backButton && <div className={`${backButton ? "grid justify-self-start col-start-1": "hidden"}`}> <Button {...backButton} /> </div>}
            <h1 className="justify-self-center">{title}</h1>
            {rightButton && (<div className="justify-self-end col-start-3"><Button {...rightButton}/></div>)}
            </section>
        </header>
        <Snackbar message="IT'S A ME! SNACKBACK!" duration={3000}/>
        </>
        // <>
        // <header className={`fullbleed uppercase border-b-grey-200 border-b py-6`}>
        //     {backButton && <div className={`${backButton ? "grid justify-self-center col-start-1": "hidden"}`}>
        //     <Button {...backButton} />
        //     </div>}
        //     <h1 className={`${backButton ? "justify-self-center col-start-2": "col-span-2"}`}>{title}</h1>
        //     {rightButton && (<div className="justify-self-end col-start-3"><Button {...rightButton}/></div>)}
        // </header>
        //     <Snackbar message="IT'S A ME! SNACKBACK!" duration={3000}/>
        // </>
    )
}
export default Header;

// EXAMPLES OF HOW TO USE IN PAGE
// backButton={{ buttonName:"EXAMPLE", elementType: "link", goBack: true, size: "lg", type: "none", status: "normal", iconName: "back", }}
//OR
// rightButton={{ buttonName:"EXAMPLE", elementType: "link", goBack: true, size: "", type: "none", status: "normal", iconName: "back", }}