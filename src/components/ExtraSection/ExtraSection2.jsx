import React from 'react';
import img1 from '../../../public/images/hassan-ouajbir-ZY12914HZ2M-unsplash.jpg'

const ExtraSection2 = () => {
    return (
        <div>
            <div className="hero w-[100%] mx-auto my-6">
                <div className="hero-content w-[100%] flex-col lg:flex-row-reverse">
                    <div className="text-center w-[50%] lg:text-left">
                        <div className='lg:ml-28' data-aos="fade-down">
                            <h2 className='text-4xl'>Huggable Treasures ?</h2>
                            <p className="py-6">These teddy bears are often made from plush fabrics that are both soft and durable, making them perfect for hugging and snuggling. They are designed to be safe for children of all ages and go through rigorous testing to meet safety standards.Huggable Treasures offers a wide variety of teddy bears, ranging in size, colors, and styles. Some bears may have special features such as movable limbs or accessories like bows or clothing. These toys make great gifts for birthdays, holidays, or any occasion where a cuddly companion is desired.Huggable Treasures teddy bears are not only loved by children but also cherished by collectors who appreciate their craftsmanship and attention to detail. They can be displayed in nurseries, bedrooms, or even used as decorative pieces in homes.</p>
                        </div>
                    </div>
                    <div className="card w-[50%] flex-shrink-0  max-w-sm shadow-2xl bg-base-100" data-aos="fade-right">
                        <img className='rounded-2xl' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;