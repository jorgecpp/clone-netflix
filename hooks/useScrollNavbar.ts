"use client"

import { useEffect, useState } from "react"

export function useScroll () {
    const [scroll, setScroll] = useState(0)
    
    useEffect(()=>{
        const updatePosition = () => {
            setScroll(window.scrollY)
        }

        window.addEventListener("scroll", updatePosition)


        return () => {window.removeEventListener("scroll", updatePosition)}
    },[])

    return scroll
}