import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-16 w-[100%] mx-auto'>
            <div className='text-center mb-6'>
                <h2 className='text-5xl text-orange-700'>Our Teddy Gallery</h2>
                <hr className='my-2 mt-5 w-[40%] mx-auto' />
                <hr className='my-2 w-[30%] mx-auto' />
                <hr className='my-2 w-[20%] mx-auto' />
                <p className='p-4'><small>Welcome to our enchanting Teddy Bear Gallery! Explore a delightful collection  <br /> of cuddly teddy bears that will warm your heart. <br /> Each bear is meticulously crafted with the softest fur, endearing details, and irresistible charm.</small></p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4" >
                <div class="grid gap-4">
                    <div data-aos="fade-down-right">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/ZLmS4sP/julker-naeem-Hst08-Iwypa0-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/WPP6HGY/devin-phaly-G8-Gyr-Gi-Ue-VM-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="flip-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/mNvJ6xC/riku-lu-NM3t3-S8p-Db-Q-unsplash.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div data-aos="flip-right">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/vzKHTmj/tom-larsen-0-BHxmjy7-Fy-A-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/njmMSVP/oxana-lyashenko-7-Xo-KI25ufn0-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/m5NYdLN/alayna-fletcher-YXvykm2-Ut-Eg-unsplash.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div data-aos="zoom-in-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/0hg03yH/mche-lee-hnws-Rpz-Tba-Y-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/hYfwCVS/kids-me-germany-Zzgmde4-l-YU-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/PNfVLQh/carter-baran-75-Ig-Lbgq-Rls-unsplash-1.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div data-aos="zoom-in-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/kSnPX75/adam-lukomski-0-9-X3jzq-IG4-unsplash.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-out-up">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/r7Ls2P4/oxana-lyashenko-07e-Cb8-SVGus-unsplash.jpg" alt=""/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/WVYpRDL/laark-boshoff-qc-YO9p-U5e4-Y-unsplash.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Gallery;























