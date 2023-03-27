import React from "react"
import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <p className="hero-hi">Hi, I am</p>
            <h2>Robert.</h2>
            <h3>I build things for the web.</h3>
            <p className="short-intro">I'm a frontend developer enthusiast focusing on building digital experiences. Currently I work at <span><a href="https://mindsoft.ro" target="_blank">Mindsoft</a></span> where I contribute delivering applications for the public institutions from Romania.</p>
            <div className="call-to-action">
                <a className="email-link" href="mailto:robert.kedves.90@gmail.com">Reach me out</a>
            </div>
        </section>
    )
}