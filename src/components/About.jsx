import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img 
                src={icon} 
                alt={title} 
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] justify-center'
      >
        I graduated from German-Malaysian Institute with Diploma in Network Security where I learned through Cisco Networking Academy and the basics of programming languages such as Python, HTML, PHP, Java, and SQL. While learning cybersecurity and achieved Cisco Certified Networking Associate (CCNA), I self taught in learning more in developing simple web development and challenge myself in learning new things. I have always been intrigued with technology especially computers. I started tinkering with computers at a very young age. My hobbies outside of coding are playing video games, creating content through video editing, and cooking. With interest in video games and creating content, I try incorporate my interests in self-teaching myself with learning programming languages such as familiarizing with Unity and Java.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");