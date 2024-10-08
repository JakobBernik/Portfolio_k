import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'Java Development',
        icons: [<FaJava />, <SiSpringboot />, <SiPostgresql />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Student Web Developer - Medius',
        stage: '2019',
      },
      {
        title: 'Java Developer - Cosylab',
        stage: '2019 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Computer Science Diploma - Faculty of Computer and Information Science, University of Ljubljana',
        stage: '2020',
      },
    ],
  },
];

// frame motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return ( 
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2 
              variants={fadeIn('right',0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2">
                From Concept to <span className="text-[#ff0000]">Code:</span> My Developer Journey
            </motion.h2>
            <motion.p 
              variants={fadeIn('right',0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="max-w[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Hello! I am a passionate software developer from Slovenia with over 3 years of experience crafting efficient and scalable solutions. I specialize in a variety of technologies, including Java, Python, TypeScript, SQL, CSS, and HTML.
Throughout my career, I have had the opportunity to work on a diverse range of projects, from smaller-scale applications to large, high-profile initiatives. Some of the most notable projects I’ve contributed to include the ESO-ELT (Extremely Large Telescope) and ITER (International Thermonuclear Experimental Reactor) – groundbreaking scientific endeavors where cutting-edge software plays a crucial role.
I’m driven by a love for solving complex problems and continuously refining my skills to stay at the forefront of technology. Whether it is building responsive web applications or developing robust systems, I bring creativity, attention to detail, and a deep commitment to delivering high-quality code.
            </motion.p>
            {/* counters */}
            <motion.div 
              variants={fadeIn('right',0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-[#ff0000]">
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-[#ff0000]">
                    <CountUp start={0} end={12} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div 
            variants={fadeIn('left',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <div className="flex gap-x-4 xl:gap-x-8 mx:auto xl:mx-0 mb-4">
              {aboutData.map((item,itemIndex)=>{
                return (
                  <div 
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-[#ff0000] after:w-[100%] after:bg-[#ff0000] after:transition-all after:duration-300'} cursor-pointer capitalize xl-text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={()=> setIndex(itemIndex)}
                    >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item,itemIndex1)=>{
                return (
                <div key={itemIndex1} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex2)=>{
                    return <div key={itemIndex2} className="text-2xl text-white">{icon}</div>
                  })}
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </div>
    );
};

export default About;
