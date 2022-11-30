import React from 'react';

const InfoCard = ({ img, bg, cardTitle }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bg} `}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary  bg-gradient-to-r from-primary to-secondary  text-white">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;