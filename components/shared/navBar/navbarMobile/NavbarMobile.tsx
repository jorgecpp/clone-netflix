import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "../../logo"
import { BellRing, Menu, Search, User } from "lucide-react"
import { ItemsNavbar } from "@/data/itemsNavbar"
import Link from "next/link"

export function NavbarMobile (){
    return(
        <div className="flex p-4 items-center justify-between">
            <Logo/>
            <Sheet>
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent side="left" className="bg-zinc-900">
                    <ul>
                        {
                            ItemsNavbar.map(item=>(
                                <li className="p-4 hover:bg-zinc-500 transition-all duration-300"><Link key={item.name} href={item.link}>{item.name}</Link></li>
                            ))
                        }
                    </ul>
                    <div className="border-[1px] border-white/70 my-5"/>
                    <div className="flex justify-between p-2">
                        <Search className="cursor-pointer"/>
                        <BellRing className="cursor-pointer"/>
                        <User className="cursor-pointer"/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}