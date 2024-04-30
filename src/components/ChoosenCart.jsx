import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function ChoosenCart({ item }) {
    const [chosen, setChosen] = useState(false)
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(item.price);
    const addCount = () => {
        setCount(count + 1);
        const newPrice = item.price + (+item.count * count); // Calculate the new price based on count
        console.log(newPrice)
    }
    const choosenBtn = () => {
        setChosen(prev => !prev)
    }

    return (
        <div className='w-8/12 border-xl bg-gray-100 rounded-xl p-5 shadow-xl flex justify-between pr-12 items-center gap-x-12 '>
            <div>
                <img className='w-32 h-32 bg-cover bg-center' src={item?.image} alt="" />
            </div>
            <div className=' flex flex-col gap-y-2'>
                <h2 className='text-xl  poppins-semibold'>{item?.title}</h2>
            </div>
            <div className='flex flex-col items-center gap-y-2'>

                <div className='flex w-32 border border-gray-400 justify-center px-5 rounded   h-9 items-center gap-x-2'>
                    <span className=' cursor-pointer'>
                        <FaMinus />
                    </span>
                    <span className='poppins-bold cursor-pointer'>
                        {count}
                    </span>
                    <span className='text-xl cursor-pointer'>
                        <FiPlus onClick={addCount} />
                    </span>

                </div>
                <div>
                    <h2 className=' poppins-regular text-sm'>{price} so'm</h2>
                </div>
            </div>
            <div className='flex w-40 flex-col gap-y-2'>
                <h2 className='text-xl   poppins-bold'>

                    {
                        price
                    }
                </h2>
                <h2 className='text-sm line-through text-gray-400'>
                    300 000
                </h2>
            </div>
            <button className='text-lg' onClick={choosenBtn}>
                {
                    chosen ? <FaRegHeart  /> : <FaHeart className='text-red-500'/>
                }

            </button>

        </div>
    )
}

export default ChoosenCart