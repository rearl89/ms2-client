import React from "react"
import Navbar from "./Navbar"

function Layout(props) {
    return (
        <div className="text-center p-10 flex-1">
            {props.children}
        </div>
    )
}

export { Layout, Navbar }