import React from 'react';

const Portfolio = () => {
    return (
        <div className='p-20'>
            <h2 className='text-center text-3xl mb-8 font-bold'>My Portfolio</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                <a href="https://fresh-fruits-inventory.web.app/" target='_blank'>
                    <div className="portfolio text-center transform scale-100 transition duration-300 hover:scale-105">
                        <img src="https://i.ibb.co/x7HMjqd/fruits-basket-7.png" alt="" />
                        <h2 className='text-xl '>Fresh Fruits</h2>
                    </div>
                </a>
                <a href="https://alex-akash-photography.web.app/" target='_blank'>
                    <div className="portfolio text-center transform scale-100 transition duration-300 hover:scale-105">
                        <img src="https://i.ibb.co/bPVp3QX/Alex-Photography.png" alt="" />
                        <h2 className='text-xl '>Wedding Photography</h2>
                    </div>
                </a>
                <a href="https://beatboxsound.netlify.app/" target='_blank'>
                    <div className="portfolio text-center transform scale-100 transition duration-300 hover:scale-105">
                        <img src="https://i.ibb.co/4V0hqmF/Beat-box-feel-the-sound.png" alt="" />
                        <h2 className='text-xl '>Beat Box</h2>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;