import Link from "next/link";

const Menu = ({}) => {
    return(
        <nav>
            <ul className="flex gap-12 justify-center">
                <Link className=" uppercase" href="/">Hjem</Link>
                <Link className=" uppercase" href="../../features/mycar">Min Bil</Link>
                <Link className=" uppercase" href="/">Bilvask</Link>
                <Link className=" uppercase" href="/">Profil</Link>
                <Link className=" uppercase" href="/">Info</Link>
            </ul>
        </nav>
    )
}
export default Menu;