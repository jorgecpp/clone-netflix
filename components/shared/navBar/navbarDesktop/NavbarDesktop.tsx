import { BellRing, Search } from "lucide-react";

export function NavBarDesktop(){
    return(
        <div className="p-4 w-full top-0 right-0 left-0 flex justify-between transition-all duration-300  items-center">
            <div className="flex gap-20 ">
                <span>logo netflix</span>
                <ul className="gap-4 flex">
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Profile</li>
                </ul>
            </div>

            <div className="flex gap-4">
                <Search className="cursor-pointer"/>
                <BellRing className="cursor-pointer"/>
            </div>

        </div>

    )
}