import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteItem, increaseItemCount, updateItemPrice } from '../features/basketSlice';
function BasketCart({ item }) {
    const dispatch = useDispatch()
    const handleIncreaseCount = () => {
        // dispatch(increaseItemCount(item.id));
        // dispatch(updateItemPrice(item.id || 1)); 
    };
    const deleteBasket = (id) => {
        console.log(id)
        dispatch(deleteItem(id))
    }
    return (
        <div className='w-full border-xl bg-gray-100 rounded-xl p-5 shadow-xl flex justify-between pr-12 items-center gap-x-12 '>
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
                        {item?.count}
                    </span>
                    <span className='text-xl cursor-pointer'>
                        <FiPlus onClick={handleIncreaseCount} />
                    </span>

                </div>
                <div>
                    <h2 className=' poppins-regular text-sm'>{item?.price} so'm</h2>
                </div>
            </div>
            <div className='flex w-40 flex-col gap-y-2'>
                <h2 className='text-xl   poppins-bold'>
                    {
                        item?.price
                    }
                </h2>
                <h2 className='text-sm line-through text-gray-400'>
                    300 000
                </h2>
            </div>
            <button>
                <MdOutlineDelete onClick={() => deleteBasket(item.id)} className='text-2xl hover:text-red-600 ease-linear duration-150 ' />

            </button>

        </div>
    )
}

export default BasketCart