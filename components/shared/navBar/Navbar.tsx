import { NavBarDesktop } from "./navbarDesktop";
import { NavbarMobile } from "./navbarMobile";

export function Navbar (){
    return(
        <nav>
            <div className="hidden mx-auto md:block">
                <NavBarDesktop/>
            </div>

            <div className="md:hidden">
                <NavbarMobile/>
            </div>
        </nav>
    )
}