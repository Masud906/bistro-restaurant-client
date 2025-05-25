import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-sable-mu.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
           <SectionTitle
           subHeading="What our client say"
           heading={'testimonials'}
           ></SectionTitle> 
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
     {
        reviews.map(review => <SwiperSlide
        key={review._id}
        >
            <div className="mx-24 my-16 flex flex-col items-center">
       <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            
                <p>{review.details}</p>
                <h2 className="text-2xl text-orange-400">{review.name}</h2>
            </div>
        </SwiperSlide>)
     }
      </Swiper>
        </section>
    );
};

export default Testimonial;