import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Feedback = () => {
  return (
    <div className="h-full relative flex flex-col justify-center lg:justify-start items-center w-full mt-10">
      <div className="flex flex-col justify-center items-center mb-24">
        <h1 className="text-[76px] font-cairo font-semibold mb-4 uppercase">
          Reviews
        </h1>
        <p className="flex flex-col items-center justify-center text-xl font-light text-gray-400">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Lorem ipsum dolor sit amet.</span>
        </p>
      </div>

      <div className="h-full realtive max-w-6xl overflow-hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          loop={true}

          pagination={{
            el: "swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">WEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">CEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">MEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">BEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">CEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">DEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] sm:w-[350px] max-w-full relative rounded-2xl border  flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]">
              <blockquote>
                <div className="">
                  <p className="text-sm relative font-light leading-[1.6] text-gray-100 sm:mr-[5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, id esse natus a, voluptas dicta accusamus labore
                    architecto alias veritatis maiores nostrum sapiente? Iure
                    vitae quasi iste sit blanditiis doloremque!
                  </p>
                  <div className="flex flex-row mt-6 relative z-20">
                    <span className="text-sm">ZEW MOW</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
