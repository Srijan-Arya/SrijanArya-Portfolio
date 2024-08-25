import './about.scss';
import {motion} from 'framer-motion';
import { useState } from 'react';

const spin = {
  hide: { rotateY: 0 },
  show: {
    rotateY: 360, // Rotating once
    transition: {
      duration: 2, // Total duration of the animation
      ease: [0.4, 0, 0.2, 1], // Ease in and out with acceleration and deceleration
    },
  },
};
const About = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className='about'>
        <div className="about-wrapper">
            <h1>Who am I?</h1>
            <motion.img variants = {spin} initial="hide" whileInView="show" src="/mypic.jpg" alt="picture" />
        </div>
        <div className="whyhire">
            <p>
            Hi, I'm Srijan, a final-year B.Tech Computer Science student at Vellore Institute of Technology, Chennai, with a passion for software development and a knack for solving complex problems. I specialize in Front end web development.
            </p>
            
            <h2>Overview</h2>
            <ul>
              <li><span className="domains">Programming Proficiency:</span>  <span className="blue">C, C++</span> <span className="yellow">Python</span></li>
              <li><span className="domains">Web Development:</span> Built robust applications using <span className="blue">React.js</span>, SQL, Vanilla HTML, CSS, JS</li>
              <li><span className="domains">Projects:</span> Developed a Product Page Platform and a Sentiment Analysis Tool using Python</li>
              <li><span className="domains">Problem-Solving:</span> Strong in <span className='red'>Data Structures and Algorithms</span>, active on 
                <a  target="_blank" className="code360" 
                  href="https://naukri.com/code360/profile/srijanarya"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}>
                    {hovering ? "See My Profile?" : "Coding Ninjas"}
                </a>
              </li>
              <li><span className='domains'>Team Player:</span> Excellent communication and teamwork skills, quick learner</li>
            </ul>
            <h3>I'm eager to bring my skills to a dynamic team, aspiring for an SDE role. Let's connect and build something great!</h3>
        </div>
    </div>
  )
}

export default About;