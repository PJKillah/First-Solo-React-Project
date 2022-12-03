import React from "react"
import Twitter from '../Images/Twitter Icon.png'
import Facebook from '../Images/Facebook Icon.png'
import Instagram from '../Images/Instagram Icon.png'
import GitHub from '../Images/GitHub Icon.png'

export default function Footer() {
    return(
        <div className="footer">
            <div className="logos">
                <a href="https://twitter.com/pavel_jovev"><img className="git" src={Twitter} alt="" /></a> 
                <a href="https://www.facebook.com/pavel.jovev.9"><img className="git" src={Facebook} alt="" /></a> 
                <a href="https://www.instagram.com/paveljovev/"><img className="git" src={Instagram} alt="" /></a> 
                <a href="https://github.com/PJKillah"><img className="git" src={GitHub} alt="" /></a> 
            </div>
        </div>
    )
 }