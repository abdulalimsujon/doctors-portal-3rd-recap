import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const MakeAppointment = () => {

    return (
        <div className='flex justify-center items-center '
            style={
                {
                    background: `url(${bg})`
                }
            }


        >
            <div className="doctor_img flex-1">

                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1">

                <h3 className='text-xl text-primary '>Appointment</h3>
                <h2 className='text-white'>Lorem ipsum dolor sit amet consectetur</h2>


                <h2 className='text-white p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque optio ea pariatur veni Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecat
                    i eius eum quasi consequatur, quas placeat rem delectus nostrum esse illum?</h2>
                <PrimaryBtn>Started</PrimaryBtn>

            </div>

        </div>
    );
};

export default MakeAppointment;