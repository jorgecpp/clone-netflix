"use client"

import { BellRing, Search } from "lucide-react";
import { Logo } from "../../logo";
import { ItemsNavbar } from "@/data/itemsNavbar";
import Link from "next/link";
import { useScroll } from "@/hooks/useScrollNavbar";

import { SelectProfile } from "../../selectProfile";



export function NavBarDesktop(){
    return(
        <div className={`${useScroll() > 20 ? 'bg-zinc-900 fixed': 'bg-transparent'} z-30  p-4 w-full top-0 right-0 left-0 flex justify-between transition-all duration-300 items-center`}>
            <div className="flex gap-20 items-center">
                <Logo></Logo>
                <ul className="gap-4 flex ">
                    {
                        ItemsNavbar.map(item =>(
                            <Link key={item.name} href={item.link} className="hover:text-gray-300 transition-all duration-300">
                                {item.name}
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <Search className="cursor-pointer hover:text-gray-300 transition-all duration-300"/>
                <BellRing className="cursor-pointer hover:text-gray-300 transition-all duration-300"/>
                
                <SelectProfile/>
                    
            </div>

        </div>

    )
}