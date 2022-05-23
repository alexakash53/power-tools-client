import React from 'react';

const Info = () => {
    return (
        <div className='grid grid-cols-2 px-20 gap-5'>
            <div class="card card-compact bg- shadow-xl p-3 bg-neutral">
                <div class="p-5 lg:flex lg:flex-row lg:justify-between lg:items-center block">
                    <div className='text-white'>
                        <p className='uppercase'>From, Bestelliers</p>
                        <h2 class="card-title my-3 text-2xl">WORX Tools</h2>
                        <button class="btn btn-sm btn-primary mt-4">Buy Now</button>
                    </div>
                    <div className='justify-end'>
                        <img style={{width:200}} src="https://i.ibb.co/K56fVps/drill.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="card card-compact bg- shadow-xl p-3 bg-secondary">
                <div class="p-5 lg:flex lg:flex-row lg:justify-between lg:items-center block">
                    <div className='text-white'>
                        <p className='uppercase'>From, Bestelliers</p>
                        <h2 class="card-title my-3 text-2xl">WORX Tools</h2>
                        <button class="btn btn-sm btn-neutral mt-4">Buy Now</button>
                    </div>
                    <div className='justify-end'>
                        <img style={{width:250}} src="https://i.ibb.co/Hdgf9Fz/gun.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;