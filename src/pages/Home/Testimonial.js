import React from 'react';
import img from '../../assets/icons/quote.svg'
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            "_id": 1,
            "name": 'winson henry',
            "review": 'rtah iwetyilw rtl',
            "img": img1,
            "des": 'california'

        },
        {
            "_id": 2,
            "name": 'winson henry',
            "review": 'rtah iwetyilw rtl',
            "img": img2,
            "des": 'wasington'
        },
        {
            "_id": 3,
            "name": 'winson henry',
            "review": 'rtah iwetyilw rtl',
            "img": img3,
            "des": "pataya"
        },

    ]


    return (
        <section className='my-21'>
            <div className='p-12'>
                <div className="flex justify-between">
                    <div className="">
                        <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                        <h1 className='text-3xl'>What our patient says !!</h1>

                    </div>
                    <div className="">

                        <img classname='lg:w-48 w-24' src={img} alt="" />

                    </div>

                </div>




            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Review review={review} ></Review>)
                }
            </div>

        </section>



    );
};

export default Testimonial;