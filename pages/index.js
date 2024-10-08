//next image
import Image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer';

//framer motion
import {easeInOut, motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';


const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' className='h1'>
            Transforming ideas <br/> Into <span className='text-[#ff0000]'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Hi, I am Jakob, a Software Developer based in Slovenia.
          </motion.p>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0 '>
        {/* particles */}
        <div>
         <ParticlesContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
