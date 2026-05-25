import Link from "next/link";

const Menu = ({}) => {
    return(
        <nav aria-label="Main Menu">
            <ul className="flex gap-12 justify-center">
                <Link className=" uppercase" href="/dashboard">Hjem</Link>
                <Link className=" uppercase" href="/mycar">Min Bil</Link>
                <Link className=" uppercase" href="/">Bilvask</Link>
                <Link className=" uppercase" href="/profile">Profil</Link>
                <Link className=" uppercase" href="/">Info</Link>
            </ul>
        </nav>
    )
}
export default Menu;