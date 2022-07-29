import { FC } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const ProductPhoto: FC = () => {
  return (
    <div className="basis-full lg:basis-1/2 max-w-xl flex items-center pl-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <img src="https://dummyimage.com/600x400/ff00ff/000000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dummyimage.com/600x400/ff00ff/000000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dummyimage.com/600x400/ff00ff/000000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dummyimage.com/600x400/ff00ff/000000" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductPhoto
