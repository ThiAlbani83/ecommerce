import React from 'react'

const FeatureItem = ({ icon, title, description }) => {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <div className='p-3 bg-[#F6F6F6] rounded-full w-fit'>
                    <img src={icon} alt="feature-icon"/>
                </div>
                <h5 className='text-base text-neutral-800 font-semibold font-inter'>{title}</h5>
            </div>

            <p className='text-sm text-neutral-500 font-inter max-w-[280px]'>{description}</p>
        </div>
    )
}

export default FeatureItem