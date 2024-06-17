import React from 'react'
import Container from '../../../components/Container'
import Button from '../../../components/Button'
import arrowRight from '../../../assets/ArrowRight.svg'
import elipse from '../../../assets/elipse.svg'
import heroPerson from '../../../assets/hero-person.svg'
import starHero from '../../../assets/star-hero.svg'

const Hero = () => {
    return (
        <section className='bg-[#F6F6F6] mt-6'>
            <Container>
                <div className='flex flex-col md:flex-row items-center gap-10 justify-between pt-20 pb-3 px-0 lg:px-20 xl:px-32 2xl:px-60'>
                    <div className='flex flex-col md:items-start items-center gap-3 w-fit'>
                        <h1 className='text-neutral-800 font-inter font-semibold text-[32px] leading-[40px] tracking-tight'>Novidades Online</h1>
                        <p className='text-neutral-600 text-sm font-inter leading-8'>Descubra Hoje Nossas Novas Coleções.</p>
                        <Button variant='primary' size='lg' className='w-[170px] item-center justify-between flex mt-9'>Veja a Coleção <img src={arrowRight} /></Button>
                    </div>
                    <div className='relative w-fit'>
                        <img src={elipse} alt="elipse-image" className='rounded-full w-full max-w-fit'/>
                        <img src={heroPerson} alt="hero-image" className='absolute -top-6 right-0 w-full max-w-fit' />
                        <img src={starHero} alt="star-image" className='absolute -top-0 left-0 w-full max-w-fit' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero