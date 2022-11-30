import React from 'react';
import InfoCard from './InfoCard';

import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white p-12'>
            <InfoCard cardTitle='Openning hour' bg='bg-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='contract us' bg='bg-accent' img={phone}></InfoCard>
            <InfoCard cardTitle='Our Location' bg='bg-secondary' img={marker}></InfoCard>
        </div>
    );
};

export default Info;