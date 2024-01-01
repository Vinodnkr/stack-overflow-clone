import React from 'react'
import { TiSocialDribbble } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './index.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='ml3 footer-cont'>
    <p >about us</p>
    <p >tour</p>
    <p >help</p>
    <p >blog</p>
    <p >chart</p>
    <p>data</p>
    <p>legal</p>
    <p>privacy policy</p>
    <p>work here</p>
    <p>advertising info</p>
    <p>mobile</p>
    <p>contact us</p>
    <p>feedback</p>
    <FaTwitter />
    <FaFacebookF />
    <TiSocialDribbble />
    </div>
    <hr />

    <div className='row'>
        <div>
            <p>TECHNOLOGY</p>
            <p>Stack Overflow</p>
            <p>Server Fault</p>
            <p>Super User</p>
            <p>Web Application</p>
            <p>Ask Ubuntu</p>
            <p>Game Development</p>
            <p>Tex-LaTex</p>
            <p>50 + more</p>
        </div>
        <div>
            <p>LIFE/ARTS</p>
            <p>Photography</p>
            <p>Science Friction & Fantasy</p>
            <p>Graphic Design</p>
            <p>Movies & TV</p>
            <p>Seasonsed Advice (cooking)</p>
            <p>Home Improvement</p>
            <p>Personal Finance</p>
            <p>19 more</p>
            </div>
        <div>
            <p>CULTURE/RECREATION</p>
            <p>English Language & Usage</p>
            <p>Skeptics</p>
            <p>Mi Yodeya (Judaism)</p>
            <p>Travel</p>
            <p>Christianity</p>
            <p>Arcage (Gaming)</p>
            <p>Bicycles Finance</p>
            <p>21 more</p>
        </div>
        <div>
            <p>SCIENCE</p>
            <p>Methematics</p>
            <p>Cross Validated (stats)</p>
            <p>Theoretical Computer Science</p>
            <p>Physics</p>
            <p>MathOverflow</p>
            <p>Chemistry</p>
            <p>Biology Finance</p>
            <p>5 more</p>
        </div>
        <div>
            <p>OTHER</p>
            <p>Stack Apps</p>
            <p>Meta Stack Exchange</p>
            <p>Area 51</p>
            <p> Stack Overflow Careers</p>
        </div>
        

    </div>
    <hr />
    </div>
  )
}

export default Footer