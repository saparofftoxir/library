import React, { useState } from 'react'
import { titles } from '../../data/titles'
import BooksCard from '../../components/BooksCard'
import { NavLink, Outlet } from 'react-router-dom'

function Home() {
    const [chooseId, setChoosenId] = useState(1)
    const currentItem = titles.find(item => item.id === chooseId)
    return (
        <div className='w-full p-16 flex flex-col h-screen'>
            <div className='w-full  flex items-start poppins-bold text-xl gap-x-6'>
                {
                    titles.map(item => (
                        <NavLink to={item.title} className={`${item.id === chooseId ? "border-b-2 ease-linear duration-150 border-cyan-600" : ""}`} onClick={() => setChoosenId(item.id)} key={item.id}>
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <div className='pt-20'>
                <h2>
                    <Outlet />
                </h2>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home