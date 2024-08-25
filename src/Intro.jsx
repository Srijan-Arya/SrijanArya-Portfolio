import { motion } from 'framer-motion';
const vary1 = {
    show:{
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    },
    hide:{
        x:-400,
    }
}
const vary2 = {
    show:{
        x: 0,
        transition: {
            type:"spring",
            duration: 3,
            staggerChildren: 0.5,
        }
    },
    hide:{
        x:400,
    }
}

const sliding_bg = {
    show:{
        x: "-200%",
        transition: {
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
        }
    },
    hide:{
        x:0,
    }
}
const bg = [
    "Web Development",
    "UI & UX",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Writer",
]
const Intro = () => {
  return (
    <div className='wrapper'>
        <div className="intro_container">
            <motion.div 
                className="info" 
                variants={vary1}
                initial="hide"
                whileInView="show"
            >
                <motion.h2 variants={vary2}>SRIJAN ARYA</motion.h2>
                <motion.p variants={vary2}>Web Developer <br /> UI & UX <br />Competitive Programmer (C++)</motion.p>
                <motion.button><img src="./download.png" alt="" /><a href="https://drive.google.com/file/d/1LTKjAgEx7tkDDQeU9L0C3xWGZQs-kRWE/view?usp=sharing"><span>DOWNLOAD MY RESUME</span></a></motion.button>
            </motion.div>
            <motion.div 
                className="skills"
                variants={vary2}
                initial="hide"
                whileInView="show"
            >
                <h2>Skills</h2>
                <img src="./skills.png" alt="skillset" />
            </motion.div>
        </div>
        <motion.div 
            className="bg-text"
            variants={sliding_bg}
            initial="hide"
            animate="show"
        >
            <ul>
                {bg.map(one_bg => 
                <li key={one_bg}>{one_bg}</li>
            )}
            </ul>    
        </motion.div>
    </div>
  )
}

export default Intro
