"use client"
import "../styles/globals.css"
import React, {useState} from "react"
import Link from 'next/link'
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"


// assign componenets with types
interface NavItem{
    label: string
    page : string
}

const NAV_ITEMS: Array<NavItem>=[
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
]

const Navbar = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentThem = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
    return ( 
        <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-strong-900 dark:border-b dark:border-stone-600">
        <div className="justify-between md: items-center md:flex">
            <div>
                <div>
                <h1 className="text-2xl font-bold">Edward Herrera</h1>
                </div>
            </div>
            <div>
                {NAV_ITEMS.map((item, idx)=>{
                    return <a key={idx}>{item.label}</a>
                })}
            </div>
        </div>
        </header>
     );
}
 
export default Navbar;