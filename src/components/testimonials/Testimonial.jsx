import React from 'react'
import '../../pages/home/Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import testi from '../../images/avatar1.jpg'
// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <section className="testimonials__container mySwiper">
        <h2>Testimonial student</h2>

        <div className="swiper-wrapper">

        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <article className="testimonial">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={testi} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <h5>Udinhaha</h5>
                        <small>stutden</small>
                    </div>
                    <div className="testimonial__body">
                        <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolore reprehenderit repudiandae nesciunt 
                                molestias qui, reiciendis praesentium asperiores incidunt?
                            
                        </p>
                    </div>
            </article>
        </SwiperSlide>
      </Swiper>
            

        </div>       

    </section>
    )
}

export default Testimonial