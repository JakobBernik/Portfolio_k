//framer motion
import {motion} from 'framer-motion'

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1c242e]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease:'easeInOut'}}>1</motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#232f3b]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{delay: 0.4, duration: 0.6, ease:'easeInOut'}}>2</motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e4354]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{delay: 0.6, duration: 0.6, ease:'easeInOut'}}>3</motion.div>
    </>
  );
};

export default Transition;
