import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FaUserTie } from "react-icons/fa";

import "../../styles/testimonialswiper.css"

SwiperCore.use([Pagination, Autoplay, Navigation]);

const TestimonialSwiper = () => {
  return (
    <Swiper pagination={{ clickable: true }} spaceBetween={20}>
        <SwiperSlide className="testimonials">
          <div>
            <FaUserTie size="4rem" />
          </div>
          <div className="testimonialSection">
            <div>
              <p className="nameJob">
                Sir John Kirwin, Founder
              </p>
              <p className="company">MENTEMIA</p>
            </div>
            <div>
              <p className="message">tabloid is an invaluable development partner for Mentemia. Their skills are wide ranging, and they are reliable and responsive. But what we appreciate most of all is that they are committed to our success.</p>
            </div>
            <div>
            <button className="orangeButton customStyles">
              ENQUIRE NOW
            </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div>
            <FaUserTie size="4rem" />
          </div>
          <div className="testimonialSection">
            <div>
              <p className="nameJob">
              Oliver Fairbrother
              </p>
              <p className="company">LEARN COACH</p>
            </div>
            <div>
              <p className="message">tabloid team is highly skilled, responsive and builds great products. We are looking forward to further improving our app with them going forward.</p>
            </div>
            <div>
            <button className="orangeButton customStyles">
              ENQUIRE NOW
            </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div>
            <FaUserTie size="4rem" />
          </div>
          <div className="testimonialSection">
            <div>
              <p className="nameJob">
              Ben Rennell
              </p>
              <p className="company">FEED MY FURBABY</p>
            </div>
            <div>
              <p className="message">It is rare to find people as passionate about your business and customers as you are. Beyond the great technical capability that tabloid have brought to our project; they have proved to be exceptionally committed and reliable.</p>
            </div>
            <div>
            <button className="orangeButton customStyles">
              ENQUIRE NOW
            </button>
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
  );
};


export default TestimonialSwiper;
