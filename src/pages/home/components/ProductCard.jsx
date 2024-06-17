import React from 'react'

const ProductCard = ({image, prodName, prodPrice}) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='bg-neutral-100'>
                <img src={image} alt={prodName} />
            </div>
            <div className='flex flex-col w-full items-start gap-3'>
                <span className='font-inter font-medium text-sm text-neutral-900'>{prodName}</span>
                <div className='flex items-start w-full gap-4'>
                    <span className={`text-xs font-inter font-medium text-neutral-900 uppercase px-4 py-[2px] border border-neutral-100 rounded-full`}>Em Estoque</span>
                    <span className='font-inter text-sm text-neutral-600'>{"R$"+prodPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard