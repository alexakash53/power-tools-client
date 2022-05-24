import React from 'react';
import '../../assets/CSS/Counter.css'
import { FaUsersCog, FaRegIdCard, FaTools, FaDeezer } from "react-icons/fa";

const Counter = () => {
    return (
        <div style={{backgroundImage:'url(https://i.ibb.co/VVY98Bx/counter-bg.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
         className='py-20 grid lg:grid-cols-4 grid-cols-1 gap-6 text-center'>
            <div class="counter">
                <FaUsersCog className='counter-icon'/>
                <span>399</span>
                <h2>we served</h2>
            </div>
            <div class="counter">
                <FaDeezer className='counter-icon'/>
                <span>1233</span>
                <h2>Anual revenue</h2>
            </div>
            <div class="counter">
                <FaRegIdCard className='counter-icon'/>
                <span>8390</span>
                <h2>customers Reviews</h2>
            </div>
            <div class="counter">
                <FaTools className='counter-icon'/>
                <span>210</span>
                <h2>our tools</h2>
            </div>
        </div>
    );
};

export default Counter;