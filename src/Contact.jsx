import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div className='contact-container'>
    <div className="contact-head">
        <h2>Connect with me</h2>
    </div>
    <div className="connect-btn">
        <a href="https://linkedin.com/in/srijan-arya" target='_blank'><img src="./ln.png" alt="LinkedIn" /></a>
        <a href="https://github.com/Srijan-Arya/" target='_blank'><img src="./gh.png" alt="Github" /></a>
        <a href="https://www.naukri.com/code360/profile/srijanarya" target='_blank'><img src="./cn.png" alt="Code360" /></a>
        <a href="https://www.hackerrank.com/profile/srijanarya04" target='_blank'><img src="./hr.png" alt="Hackerrank" /></a>
        <a href="https://www.instagram.com/srijanarya04/" target='_blank'><img src="./ig.png" alt="Instagram" /></a>
    </div>

    <footer className="footer">
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <p>&copy; Made By <strong>Srijan Arya</strong></p>
    </footer>
</div>

  )
}

export default Contact