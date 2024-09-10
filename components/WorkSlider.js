// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title1',
          path: '/black.webp',
        },
        {
          title: 'title2',
          path: '/black.webp',
        },
        {
          title: 'title3',
          path: '/black.webp',
        },
        {
          title: 'title4',
          path: '/black.webp',
        },
      ],
    },
    {
      images: [
        {
          title: 'title5',
          path: '/black.webp',
        },
        {
          title: 'title6',
          path: '/black.webp',
        },
        {
          title: 'title7',
          path: '/black.webp',
        },
        {
          title: 'title8',
          path: '/black.webp',
        },
      ],
    },
  ],
};

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//next image
import Image from 'next/image';

//icons
import {BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[480px]">
      {
        workSlides.slides.map((slide,index)=>{
          return (
            <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index)=>{
              return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt='' className='opacity-30'/>
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent hover:bg-[rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20'>
                    <div className='flex items-center gap-x-2 text-[20px] tracking-[0.2em]'>
                      {/* title part 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.title}</div>
                      {/* icon */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
            </div>
          </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

