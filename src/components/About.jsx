import React from "react"
import "./About.css"

export default function About() {
    return (
        <section id="about" className="about">
            <h3>About me</h3>
            <div className="inner">
                <div>
                    <p>Suspendisse quis mauris ut ligula tempor feugiat et eu urna. In molestie ex felis, ornare viverra leo placerat a. Etiam iaculis nunc leo, semper blandit dui viverra nec.</p>
                    <p>Maecenas gravida augue purus, at mollis velit facilisis quis. Etiam condimentum eros eu faucibus sagittis. Aenean odio metus, condimentum vel aliquet a, hendrerit vel ipsum</p>
                    <p>Suspendisse luctus nisi libero, sit amet consequat lorem tempus non:</p>
                    <ul className="about-list">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <img src="./react.svg" className="profile-pic"/>
            </div>
        </section>
    )
}