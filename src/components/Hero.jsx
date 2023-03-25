import React from "react"
import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <p className="hero-hi">Hi, I am</p>
            <h2>Robert.</h2>
            <h3>I build things for the web.</h3>
            <p className="short-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue odio sit amet neque fermentum consectetur. 
                Sed porta odio a libero rutrum efficitur. Mauris ultricies elementum nibh, at tempor eros.</p>
            <div className="call-to-action">
                <a className="email-link" href="mailto:robert.kedves.90@gmail.com">Reach me out</a>
            </div>
        </section>
    )
}