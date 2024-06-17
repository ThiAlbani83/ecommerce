import React from 'react'
import Container from '../../../components/Container'
import Tag from '../../../components/Tag'
import ProductCard from './ProductCard'
import Product5 from '../../../assets/product-5.svg'
import Product6 from '../../../assets/product-6.svg'
import Product7 from '../../../assets/product-7.svg'
import Product8 from '../../../assets/product-8.svg'

const Featured = () => {
    return (
        <section className='mt-[120px]'>
            <Container>
                <div className='flex flex-col gap-12'>
                    <div className='flex items-center gap-6 justify-center'>
                        <Tag variant='primary' size='lg'>Tendência</Tag>
                        <Tag variant='inactive' size='lg'>Novidades</Tag>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-10 md:gap-10 xl:gap-20'>
                        <ProductCard image={Product5} prodName={"Elegant Ebony Sweatshirts"} prodPrice={"35.00"} />
                        <ProductCard image={Product6} prodName={"Sleek and Cozy Black"} prodPrice={"57.00"} />
                        <ProductCard image={Product7} prodName={"Raw Black Tees"} prodPrice={"19.00"} />
                        <ProductCard image={Product8} prodName={"MOCKUP Black"} prodPrice={"30.00"} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Featured