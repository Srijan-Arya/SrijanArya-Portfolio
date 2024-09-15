import './navbar.scss'
import {motion} from 'framer-motion';
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Side bar */}
        <div className="wrapper">
        <motion.span 
              initial={{opacity:0, scale:0.5}}
              animate={{opacity:1, scale:1}}
              transition={{duration:.1}}
            >
              <img src="./logo2.png" alt="" /></motion.span>
            <div className="links-to-section">
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a href="#connect">Connect</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar