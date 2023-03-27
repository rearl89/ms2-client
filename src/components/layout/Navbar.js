import React from "react";
import { NavLink } from "react-router-dom";


const navs = [
    { path: '/', name: 'Home' },
    { path: '/todo', name: 'Todo' },
    { path: '/codloadout', name: 'Loadout'}
]

export default function Navbar() {
    return (
        <nav className="bg-gray-600 text-blue-300 shadow p-3">
            <ul className="flex space-x-28 justify-center">
                {navs.map(navItem => (
                    <li><NavLink to={navItem.path} className={({ isActive }) => isActive ? "border-b-2 border-blue-100 text-blue-100 hover:text-blue-100 hover:no-underline" : "hover:text-blue-300 hover:no-underline"}>{navItem.name}</NavLink></li>
                ))}
            </ul>
        </nav>
    )
}