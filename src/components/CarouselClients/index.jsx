import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/carousel.css';


import { Pagination } from 'swiper/modules';


const CarouselClients = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '99vw',
        justifyContent: 'space-evenly'
      }}>
        <img style={{ width: '130px' }} src="/images/celsia.png" alt="" />
        <img style={{ width: '190px' }} src="/images/hybritect1.png" alt="" />
        <img style={{ width: '128px' }} src="/images/las-america1.png" alt="" />
        <img style={{ width: '190px' }} src="/images/tronex-11.png" alt="" />
        <img style={{ width: '190px' }} src="/images/onu.png" alt="" />
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
      </Swiper> */}
    </>
  )
}

export { CarouselClients }