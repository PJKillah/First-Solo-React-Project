import React from "react"
import Logo from '../Images/Rectangle 90.jpg'

export default function Info() {
    return(
        <div className="info">
            <img className="logo" src={Logo} alt="" />
            <h1 className="infoh1">Pavel Jovev</h1>
            <h3 className="infoh3">Frontend Developer</h3>
            <p className="mainp">Paveljovev.website</p>
            <div className="btns">
                <button className="email"> <a className="emaila" href="https://mail.google.com/mail/u/0/#inbox">Email</a></button>
                <button className="linkedin"> <a className="linkedina" href="https://www.linkedin.com/in/pavel-jovev-074939204/">LinkedIn</a> </button>
            </div>
        </div>
    )
}