import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body py-2">

                <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, beatae.</p>

            </div>
            <div className="flex">
                <div className="p-3">
                    <img class="mask mask-circle" src={review.img} />
                </div>
                <div className="p-3">
                    <h1>{review.name}</h1>
                    <h2>{review.des}</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;