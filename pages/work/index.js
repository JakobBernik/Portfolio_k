
//components
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up',0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
              >My Work<span className='text-[#ff0000]'>.</span></motion.h2>
            <motion.p 
              variants={fadeIn('up',0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Over the years, I have had the privilege of working on a variety of exciting projects that span different industries and challenges. From large-scale scientific endeavors like ESO-ELT and ITER to smaller, custom-built applications, each project has allowed me to refine my skills and push the boundaries of what’s possible with code. Below is a selection of my work, showcasing my commitment to quality, innovation, and solving complex problems through software development.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down',0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;

