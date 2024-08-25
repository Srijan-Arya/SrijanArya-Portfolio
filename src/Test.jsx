import {motion, spring} from "framer-motion"
import { useState } from "react"
const divsty = {
    // background: '#f102f2',
    // width: '100px',
    // height: '100px',
    margin:'0 20px',
    // border: '2px solid yellow',
    width: '200px'
}
const vary = {
    show:{
        opacity:1,
        x:100,
        // transition: { staggerChildren:0.2 },
    },
    hide:{
        opacity:0,
    },
    
}
const tt = {
    // type: "spring",
    // duration: 1.5,
    staggerChildren:0.3,
    
}
const liss = ["item1", "item2", "item3", "item4"];
const Test = () => {

    const [open, setopen] = useState(false);
    
    return (
    <div>
        <motion.ol variants={vary} initial="hide" whileInView="show" transition={tt} style={divsty}>
           {liss.map((item)=>(
            <motion.li key={item} variants={vary}>
                {item}
            </motion.li>
           ))} 
        </motion.ol>
        {/* <motion.div style={divsty} variants={vary} animate={open ? "show" : "hide"} transition={tt}></motion.div>
        <button onClick={()=>setopen(p=>!p)}>CLIECK ME</button> */}
    </div>
  )
}
export default Test
