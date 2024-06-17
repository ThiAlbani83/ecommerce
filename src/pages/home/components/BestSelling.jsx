import React from 'react'
import Container from '../../../components/Container'
import Product1 from '../../../assets/product-1.svg'
import Product2 from '../../../assets/product-2.svg'
import Product3 from '../../../assets/product-3.svg'
import Product4 from '../../../assets/product-4.svg'
import ProductCard from './ProductCard'

const BestSelling = () => {
    return (
        <Container>
            <div className='w-full mt-[120px] gap-20 flex flex-col items-center'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xs text-neutral-300 font-inter font-medium uppercase tracking-widest'>Compre Agora</span>
                    <h3 className='text-neutral-900 text-2xl font-bold font-inter'>Mais Vendidos</h3>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-10 md:gap-10 xl:gap-20'>
                    <ProductCard image={Product1} prodName={"Classic Monochrome Tees"} prodPrice={"35.00"} />
                    <ProductCard image={Product2} prodName={"Monochromatic Wardrobe"} prodPrice={"27.00"} />
                    <ProductCard image={Product3} prodName={"Essential Neutrals"} prodPrice={"22.00"} />
                    <ProductCard image={Product4} prodName={"UTRAANET Black"} prodPrice={"43.00"} />
                </div>
            </div>
        </Container>
    )
}

export default BestSelling