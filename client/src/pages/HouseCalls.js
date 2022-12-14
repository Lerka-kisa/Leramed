import React from 'react';

const HouseCalls = () => {
    const date = new Date();

    date.setTime(date.getTime() + 15 * 60 * 1000)

    console.log(date);

    return (
        <div>
            А вот тут у нас страничка с вызовами на дом

        </div>
    );
};

export default HouseCalls;