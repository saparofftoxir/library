import React from 'react'
import { useSelector } from 'react-redux';
import BasketCart from '../components/BasketCart';
import { useNavigate } from 'react-router-dom';

function Basket() {
    const basket = useSelector(state => state.basket.basket)
    const navigate = useNavigate()
    const menyuHandler = () => {
        navigate('/kitoblar')
    }
    if (basket.length === 0) {
        return (
            <div className='flex flex-col min-w-96 min-h-60 m-auto'>
                <img className='w-56 m-auto bg-cover mt-20 ' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" />
                <div className='flex flex-col w-2/4 gap-2 items-center justify-center m-auto'>
                    <h1 className='flex poppins-bold text-xl'>Savatda hozircha mahsulot yo'q.</h1>
                    <h2 className='flex poppins-semibold'>Bosh sahifadagi termalardan boshlang yoki kerakli kitobni qidiruv orqali toping.</h2>
                    <button onClick={menyuHandler} className='p-2 text-white font-semibold w-36 bg-cyan-600 hover:bg-cyan-500 ease-linear duration-150 rounded'>Kitoblar</button>
                </div>
            </div>
        )
    }
    const calculateTotalPrice = (basket) => {
        let totalPrice = 0;
        basket.forEach(item => {
            totalPrice += parseFloat(item.price);
        });
        return totalPrice;
    };
    const totalPrice = calculateTotalPrice(basket);

    return (
        <div className='w-full bg-gray-200 flex items-start p-20 justify-between min-h-screen '>


            <div className='w-8/12 flex flex-col gap-4'>
                {
                    basket?.map(item => <BasketCart key={item.id} item={item} />)
                }
            </div>

            <div className='w-[350px] sticky top-20 flex flex-col items-center gap-y-3 bg-white  h-60 rounded-xl p-6 shadow-2xl'>
                <h2 className='poppins-semibold text-xl'>Buyurtmangiz </h2>
                <div className='flex items-center w-full justify-between'>
                    <div className='w-full flex items-center justify-between'>

                        <h2 className='poppins-semibold'>
                            Mahsulotlar:
                        </h2>
                        <h2>
                            <span className='poppins-regular'>
                                ({
                                    basket?.length
                                })
                            </span>

                        </h2>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='poppins-semibold'>
                        Jami narx:
                    </h2>
                    <h2 className='poppins-semibold'>
                       {totalPrice}
                    </h2>
                </div>
                <button className='w-full h-8 text-cyan-700 border-2 border-cyan-600'
                >Yetkaazib berish (Ertaga)</button>
                <button className='w-full bg-cyan-600 hover:bg-cyan-500 ease-linear duration-150 text-white rounded h-8 poppins-regular'>Rasmiylashtirish</button>
            </div>
        </div>
    )
}

export default Basket;