import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './carousel.css'

import image1 from "../../assets/images/cover1.jpg";
import image2 from "../../assets/images/cover2.jfif";
import image3 from "../../assets/images/cover3.jpg";
import image4 from "../../assets/images/cover4.jpeg";
import image5 from "../../assets/images/cover5.jpg";
import image6 from "../../assets/images/cover6.jpg";
import image7 from "../../assets/images/cover7.jpg";
import image8 from "../../assets/images/cover8.jpg";
import image9 from "../../assets/images/cover9.webp";

const Carousel = () => {
    return (
        <div className="">
            <Swiper className="mySwiper">
                <SwiperSlide className="image">
                    <img width={"100%"} className="height" src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img   width={"100%"} className="height" src={image5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  width={"100%"} className="height" src={image9} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
