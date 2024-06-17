import React from 'react'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

const Newsletter = () => {
    return (
        <section className='bg-gradient-to-r from-[#F6F6F6] to-[#F6F6F6]/0 mt-32 w-full'>
            <Container>
                <div className='flex flex-col md:flex-row lg:px-20 2xl:px-40 items-center py-[60px] gap-10'>
                    <div className='flex w-full flex-col items-center md:items-start gap-6'>
                        <h3 className='font-inter font-bold text-center md:text-start text-2xl text-neutral-900 max-w-[350px] lg:max-w-full capitalize'>Inscreva-se na nossa Newsletter!</h3>
                        <p className='font-inter text-center md:text-start font-normal text-neutral-500 text-sm max-w-[500px]'>Adoramos surpreender nossos assinantes com presentes ocasionais.</p>
                    </div>
                    <div className='flex items-center gap-4 w-full'>
                        <input type="text" placeholder='Seu e-mail' className='w-full px-3 py-2 placeholder:text-neutral-300 outline-none border border-neutral-100 rounded-md'/>
                        <Button size='lg' variant='primary' className='w-full max-w-[130px] px-4 py-3'>Inscreva-se</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Newsletter