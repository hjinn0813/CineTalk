import React from 'react';
import '../styles/Main/Main.scss';
import ReviewBox from '../components/Main/ReviewBox';
import Reviews from '../components/Main/Reviews.json';
import Friends from '../components/Main/Friends.json';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Main() {
  return (
    <section className="main-container">
      <div className="main-item new-posts">
        <div className="new">지금 뜨는 최신 글</div>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >
          {Reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewBox
                MovieName={review.Movie_Name}
                PostTitle={review.Post_Title}
                author={review.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-item friends-posts">
        <div className="friends">내 친구는 지금</div>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 25,
            },
          }}
          className="mySwiper"
        >
          {Friends.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewBox
                MovieName={review.Movie_Name}
                PostTitle={review.Post_Title}
                author={review.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
