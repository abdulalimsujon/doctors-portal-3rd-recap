import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary  bg-gradient-to-r from-primary to-secondary  text-white">{children}</button>

        </div>
    );
};

export default PrimaryBtn;