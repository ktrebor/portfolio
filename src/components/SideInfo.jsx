import React from "react"
import "./SideInfo.css"

export default function SideInfo() {
    return (
        <>
            <div className="side-info-left">
                <ul className="side-info-links">
                    <li><a href="#"><img className="social-icon" src="./github.png"/></a></li>
                    <li><a href="#"><img className="social-icon" src="./linkedin.png"/></a></li>
                </ul>
            </div>
            <div className="side-info-right">
                <div className="side-info-links">
                    <a className="social-email" href="mailto:robert.kedves.90@gmail.com">robert.kedves.90@gmail.com</a>
                </div>
            </div>
        </>

    )
}