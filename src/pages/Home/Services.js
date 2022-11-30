import React from 'react';
import Service from './Service';
import img1 from '../../assets/images/cavity.png'
import img2 from '../../assets/images/whitening.png'
import img3 from '../../assets/images/fluoride.png'

const Services = () => {

    const services = [
        {
            "id": 1,
            "treatment": 'flodride treatment',
            "description": 'this is demo item ..it is jst for showing..',
            "img": img1
        },
        {
            "id": 2,
            "treatment": 'cravity filling',
            "description": 'this is demo item ..it is jst for showing..',
            "img": img2
        },
        {
            "id": 3,
            "treatment": 'teeth whitening',
            "description": 'this is demo item ..it is jst for showing..',
            "img": img3
        },
    ]


    return (


        <div className="grid sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-2 p-12">
            {
                services.map(service => <Service service={service}></Service>)
            }

        </div>
    );
};

export default Services;