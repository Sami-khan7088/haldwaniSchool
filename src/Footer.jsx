import React from 'react'
import { FaFacebookSquare,FaInstagramSquare ,FaYoutubeSquare, FaTwitterSquare} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='upperFooter'>
        <div className='mainFoot'>
            <h2>Contact Us</h2>
            <div className='list'>
            <ul>
                <li>S.G. TEG BAHADUR PLATINUM SCHOOL
                BARAPURA</li>
                <li>Distt.-Pilibhit(U.P.)</li>
                <li>Office Contact: +91 9917375700,9761455328</li>
                <li>Email: sgtbps2023@gmail.com</li>
                <li>For academic information
                    Principal - 05882- 237253
                    (Please contact during school hour)</li>
            </ul>
            </div>
        </div>
        <div className='mainFoot'>
            <h2>Quick Link</h2>
            <div className='list'>
            <ul>
                <li>Student/Parent Portals</li>
                <li>Mandatory Public Disclosure</li>
                <li>Transfer Certificate</li>
                <li>Circulars & Notices</li>
            </ul>
            </div>
        </div>
        <div className='mainFoot'>
            <h2>Follow Us</h2>
            <div className='list'>
            <div><FaFacebookSquare/></div>
            <div><FaInstagramSquare/></div>
            <div><FaYoutubeSquare/></div>
            <div><FaTwitterSquare/></div>
            </div>
        </div>

        </div>
        <div className='outline'/>
        <div className='ButtomFooter'>
            <p>Copyright 2022 | All Rights Reserved - Naini Softech</p>
        </div>
    </div>
  )
}

export default Footer