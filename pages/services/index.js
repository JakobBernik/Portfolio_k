
//components
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
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
              className='h2 xl:mt-8'
              >My services<span className='text-[#ff0000]'>.</span></motion.h2>
            <motion.p 
              variants={fadeIn('up',0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              As a versatile developer with expertise in multiple programming languages and technologies, I offer a range of services to help bring your projects to life. Whether you're looking to build a dynamic web application, optimize an existing system, or implement complex backend solutions, I provide tailored, high-quality solutions designed to meet your specific needs. With a focus on clean code, scalability, and seamless user experience, I’m committed to delivering results that drive success.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down',0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
