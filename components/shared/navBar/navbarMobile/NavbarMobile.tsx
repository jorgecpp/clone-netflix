"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "../../logo"
import { BellRing, Menu, Search, User } from "lucide-react"
import { ItemsNavbar } from "@/data/itemsNavbar"
import Link from "next/link"
import { SelectProfile } from "../../selectProfile"
import { useScroll } from "@/hooks/useScrollNavbar"

export function NavbarMobile (){
    const scroll = useScroll()
    return(
        <div className={`${scroll > 20 ? 'bg-zinc-900 fixed top-0 left-0 w-full shadow-md':'bg-transparent'} flex p-4 items-center justify-between z-50 transition duration-300`}>
            <Logo/>
            <Sheet>
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent side="left" className="bg-zinc-900">
                    <ul>
                        {
                            ItemsNavbar.map(item=>(
                                <li key={item.name} className="p-4 hover:bg-zinc-500 transition-all duration-300"><Link key={item.name} href={item.link}>{item.name}</Link></li>
                            ))
                        }
                    </ul>
                    <div className="border border-white/70 my-5"/>
                    <div className="flex items-center justify-between p-2">
                        <Search className="cursor-pointer"/>
                        <BellRing className="cursor-pointer"/>
                        <SelectProfile/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}