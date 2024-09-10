// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [ 
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I ensure your brand is seamlessly integrated into your online presence.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Designing and coding responsive, interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks (React, Angular, Vue.js).',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: ' Developing tailored software solutions to automate or optimize business processes.',
  },
  {
    icon: <RxReader />,
    title: 'Documentation',
    description: 'I create thorough technical documentation for developers, including API references, code documentation, architecture overviews, user manuals and guides.',
  },
  {
    icon: <RxRocket />,
    title: 'Testing and Quality Assurance',
    description: 'Implementing unit, integration, and end-to-end testing using frameworks like TestNG to ensure software reliability.',
  },
];

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination} from 'swiper';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]">
      {
        serviceData.map((item,index)=>{
          return <SwiperSlide key={index}>
            <div className="bg-[rgba(255, 0, 0,0.5)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-[#ff0000] mb-4">{item.icon}</div>
              {/* tittle and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-[#ff0000] transtion-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
