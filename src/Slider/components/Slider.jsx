import React from 'react';
import images from '../exports/images';
import '../styles/slider.css';
//import { motion} from "framer-motion/dist/framer-motion"
import { motion } from "framer-motion"



const Slider = () => {
    return (
      <motion.div className='carousel'>
          <motion.div className='inner-carousel' drag='x' 
          dragConstraints={{right: 0, left:-2123}} >
          {images.map(image => (
              <motion.div className='item'>
                  <img src={image} alt="" />
              </motion.div>
          ))}
          </motion.div>        
      </motion.div>
    )
  }
  
  export default Slider