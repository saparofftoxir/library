import React, { useState } from 'react'
import { IoBook } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({searchHandler,setSearch}) {
    const basket=useSelector(state=>state.basket.basket)
    const choosenss=useSelector(state=>state.choosenss.choosenss)
    const [language, setLanguage] = useState('Russia')
    const changeLang = () => {
        setLanguage("Uzbek")
    }

    return (
        <nav className='w-full sticky top-0 h-14 bg-white shadow-xl px-20 flex items-center justify-between'>
            <div className='flex items-center font-bold text-2xl gap-x-2'>
                <NavLink className='flex items-center gap-x-1' to={'/Kitoblar'}>
                    <IoBook />
                    Library
                </NavLink>
            </div>
            <ul className='w-full flex gap-x-2 items-center  px-20'>
                <select className='border-2 cursor-pointer outline-none w-56 h-8 rounded' name="" id="">
                    <option value="Unlibrary">Unlibrary</option>
                    <option value="Scopus">Scopus</option>
                </select>
                <li className='w-96 h-8 rounded border-2 flex items-center justify-between '>
                    <div className='w-full px-2 flex items-center gap-x-2'>
                        <IoSearchSharp />
                        <input onChange={e => setSearch(e.target.value)} className='outline-none bg-transparent' type="text" placeholder='Qidirish' />
                    </div>
                    <button onClick={searchHandler} className='bg-cyan-600 flex-1 font-semibold text-white rounded px-3 p-1'>Qidirish</button>
                </li>

            </ul>
            <ul className='w-full pl- flex items-center gap-x-5'>
                <li className='flex items-center cursor-pointer gap-x-2 f'>
                    <NavLink className='flex items-center gap-0.5' to={'/choosens'}>
                        <FaRegHeart className='w-5 h-5' />
                        <sup className='w-4 h-4 poppins-regular rounded-full font-semibold bg-cyan-700 flex items-center justify-center text-white'>
                            {choosenss?.length}
                            </sup>
                    </NavLink >
                    <NavLink className='flex items-center gap-0.5' to={'/basket'}>
                        <SlBasket className='w-5 h-5' />
                        <sup className='w-4 poppins-regular h-4 rounded-full font-semibold bg-cyan-700 flex items-center justify-center text-white'>
                            {basket?.length}
                            </sup>
                    </NavLink>
                </li>
                <li onClick={changeLang} className='font-semibold cursor-pointer'>
                    {language}
                </li>
                <li>
                    <NavLink to={'/login'}>
                        <button className='bg-cyan-600 w-32 poppins-medium text-white rounded px-3 p-1'>Kirish</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;