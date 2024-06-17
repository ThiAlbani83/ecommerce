import React from 'react'
import Container from '../../../components/Container'
import Button from '../../../components/Button'
import { MdArrowForward } from "react-icons/md";
import ProdCta from "../../../assets/product-cta.svg";

const CTA = () => {
    return (
        <section className='bg-gradient-to-r from-[#F6F6F6] to-[#F6F6F6]/0 mt-32 w-full'>
            <Container>
                <div className='flex flex-col md:flex-row lg:px-40 2xl:px-80'>
                    <div className='flex w-full flex-col items-center md:items-start gap-6 pt-[52px] pb-[73px]'>
                        <h3 className='font-inter font-bold text-center md:text-start text-2xl text-neutral-900 max-w-[350px] lg:max-w-full capitalize'>Navegue pelo nosso paraíso da moda!</h3>
                        <p className='font-inter text-center md:text-start font-normal text-neutral-500 text-sm max-w-[500px]'>Entre em um mundo de estilos e explore nossa coleção diversificada de categorias de roupas.</p>
                        <Button variant='primary' size='lg' className='flex items-end gap-[6px] max-w-fit mt-2'>Comece a Navegar <MdArrowForward className='text-lg' /></Button>
                    </div>
                    <div className='hidden md:block'>
                        <img src={ProdCta} alt="prod5" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CTA