import React from 'react'
import Container from './Container'
import LogoFooter from '../assets/logo-footer.svg'
import Twitter from '../assets/Twitter.svg'
import Youtube from '../assets/Youtube.svg'
import Instagram from '../assets/Instagram.svg'
import Mastercard from '../assets/Mastercard.svg'
import Amex from '../assets/Amex.svg'
import Visa from '../assets/Visa.svg'


const Footer = () => {
    return (
        <footer className='py-20'>
            <Container>
                <div className='flex flex-col gap-20 lg:gap-10 justify-between lg:flex-row'>
                    <div className='flex flex-col gap-5 w-fit'>
                        <img src={LogoFooter} alt="logo" className='max-w-[180px]' />
                        <p className='max-w-[230px] font-inter text-sm tracking-wider text-neutral-500'>Ecommerce é uma loja online de venda de produtos X</p>
                        <div className='flex items-center gap-4 mt-5'>
                            <img src={Twitter} alt="twitter" />
                            <img src={Youtube} alt="youtube" />
                            <img src={Instagram} alt="instagram" />
                        </div>
                    </div>
                    <div className='flex gap-16'>
                        <div className='flex flex-col gap-10'>
                            <h4 className='font-inter font-medium text-sm text-neutral-300'>SUPORTE</h4>
                            <ul className='font-inter font-medium text-neutral-500 text-sm flex flex-col gap-4'>
                                <li>FAQ</li>
                                <li>Termos de Uso</li>
                                <li>Política de Privacidade</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <h4 className='font-inter font-medium text-sm text-neutral-300'>EMPRESA</h4>
                            <ul className='font-inter font-medium text-neutral-500 text-sm flex flex-col gap-4'>
                                <li>Sobre Nós</li>
                                <li>Contato</li>
                                <li>Carreiras</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <h4 className='font-inter font-medium text-sm text-neutral-300'>LOJA</h4>
                            <ul className='font-inter font-medium text-neutral-500 text-sm flex flex-col gap-4'>
                                <li>Minha Conta</li>
                                <li>Checkout</li>
                                <li>Carrinho</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 lg:gap-10'>
                        <h3 className='uppercase font-inter font-medium text-neutral-300 text-sm'>Métodos de Pagamento</h3>
                        <div className='flex items-center gap-4 mt-5'>
                            <img src={Mastercard} alt="master" />
                            <img src={Amex} alt="amex" />
                            <img src={Visa} alt="visa" />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer