import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava05 from "../../assets/all-images/ava-5.jpg";
import ava06 from "../../assets/all-images/ava-6.jpg";
import ava07 from "../../assets/all-images/ava-7.jpg";
import ava08 from "../../assets/all-images/ava-8.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        The booking process was incredibly smooth, with a wide array 
        of vehicles available to choose from. The pickup and drop-off 
        were seamless, making the entire experience hassle-free.I 
        appreciated the user-friendly interface, which made navigating 
        the website a breeze. The customer service team was also very 
        helpful and responsive to any queries I had. Overall, I had a 
        fantastic experience with the car rental website.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Gali Dinesh</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Actually,I found the user interface of the website to be extremely intuitive,
        and the pricing was quite competitive. Whenever I needed assistance, 
        the customer support team was quick to respond and very helpful. The 
        variety of cars available catered to my specific needs, ensuring I 
        found the perfect vehicle for my trip. The booking process was straight
        forward, and I encountered no issues during pickup or drop-off. I would 
        highly recommend this car rental website to others.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava06} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Aromal Joseph</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        My experience with this car rental website was nothing short of excellent.
        The entire transaction was smooth, from booking to returning the car. The
        cars were well-maintained and in excellent condition, which added to the 
        overall satisfaction. The convenience of the booking process and the clarity 
        of pricing made it a stress-free experience. Additionally, the customer service
        was exceptional, addressing any concerns promptly. I will definitely be using 
        this service again in the future.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava07} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rohit Sudarsen</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I was impressed by the efficiency of this car rental website.
        The service provided was top-notch, with transparent pricing 
        and no hidden fees. The booking process was quick and easy, 
        and I appreciated the clear communication throughout. The 
        website's interface was user-friendly, making it simple to 
        browse and select the perfect car for my needs. Overall, I 
        had a great experience and would recommend this website to 
        anyone in need of a reliable car rental service.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava08} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Poomesh Raj</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
