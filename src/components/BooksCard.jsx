import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AddToBasket } from '../features/basketSlice';
import { useNavigate } from 'react-router-dom';
import { AddToChoosens } from '../features/choosenSlice';
function BooksCard({ book }) {
    const basket = useSelector(state => state.basket.basket)
    const choosenss = useSelector(state => state.choosenss.choosenss)
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [choosen, setChoosen] = useState(false)
    const notify = () => {
        setChoosen(true)
        if (!currentUser) {
            return toast.warning("Iltimos oldin ro'yhatdan o'ting");
        } else {
            const isBookInBasket = choosenss.some(item => item.id === book.id);
            if (isBookInBasket) {
                return toast.warning("Bu kitob oldin yoqtirishlarga qo'shilgan");
            } else {
                dispatch(AddToChoosens(book))
            }
        }
    }
    
    const addToBasket = () => {
        if (!currentUser) {
            return toast.warning("Iltimos oldin ro'yhatdan o'ting");
        } else {
            const isBookInBasket = basket.some(item => item.id === book.id);
            if (isBookInBasket) {
                return toast.warning("Bu kitob oldin savatga qo'shilgan");
            } else {
                dispatch(AddToBasket(book));
            }
        }
    }
    return (
        <div className='w-full flex border-2 rounded-xl shadow-lg p-3 flex-col items-center gap-2' >
            <img className='h-56 w-56 bg-cover bg-center ' src={book?.image} alt="" />
            <h2 className='poppins-semibold'>{book?.title}</h2>
            <h2 className=' poppins-bold'>{book?.price} so'm</h2>
            <div className='flex items-center gap-x-3'>
                <button className='hover:text-red-600 ease-linear duration-150' onClick={notify}>
                    {choosen ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                </button>
                <button onClick={addToBasket} className='flex poppins-regular items-center gap-x-2 rounded p-1 bg-cyan-600 hover:bg-cyan-500 ease-linear duration-150 text-white px-3'>
                    Sotib olish
                    <IoCartOutline />
                </button>
            </div>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition: Bounce
                />
            </div>
        </div>
    )
}

export default BooksCard;