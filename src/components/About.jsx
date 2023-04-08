import React from "react"
import "./About.css"

export default function About() {
    return (
        <section id="about" className="about">
            <h3>About me</h3>
            <div className="inner">
                <div className="inner-text">
                    <p>Hi, I'm Robert and I like building things for the web. In 2016, I've started working with WordPress and later on I learned HTML and CSS. Being eager to learn more, I've started working with JavaScript.</p>
                    <p>I've had the privilege of working at <span>an advertising agency</span>, <span>a cryptocurrency start-up</span>, <span><a href="https://www.smc.eu/en-eu" target="_blank">a manufacturer of pneumatic control devices</a></span> and <span><a href="https://www.alfleth.com/en/" target="_blank">a reseller of machine tools</a></span>.</p>
                    <p>Currently, my main focus is delivering applications for public institutions at <span><a href="https://mindsoft.ro" target="_blank">Mindsoft</a></span>.</p>                    
                    <p>Here are the technologies I'm working with:</p>
                    <ul className="about-list">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <img src="./profile-pic.png" className="profile-pic"/>
            </div>
        </section>
    )
}