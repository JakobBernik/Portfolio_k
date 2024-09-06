//next image
import Image from 'next/image';

const Avatar2 = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
      src={'/sticker_k2.png'}
      width={737}
      height={678}
      alt=''
      className='translate-z-0 w-full h-full'
    />
  </div>;
};

export default Avatar2;
