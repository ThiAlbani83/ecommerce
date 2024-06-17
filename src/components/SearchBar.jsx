import React from 'react'
import search from '../assets/Search.svg'
import Container from './Container'

const SearchBar = () => {
    return (
        <Container>
            <div className='w-full flex items-center justify-center gap-2'>
                <input type="text" placeholder={`Busque produtos aqui . . .`} className='outline-none border border-neutral-200 rounded-md px-4 py-2 w-full max-w-[350px]' />
                <img src={search} alt="search-icon" className='w-6' />
            </div>
        </Container>
    )
}

export default SearchBar