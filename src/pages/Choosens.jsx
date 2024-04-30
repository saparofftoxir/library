import React from 'react'
import { useSelector } from 'react-redux'
import ChoosenCart from '../components/ChoosenCart'
import { useNavigate } from 'react-router-dom'

function Choosens() {
    const choosenss = useSelector(state => state.choosenss.choosenss)
    const navigate = useNavigate()
    if (choosenss.length === 0) {
        const menyuHandler = () => {
            navigate('/Kitoblar')

        }
        return (
            <div className='flex flex-col min-w-96 min-h-60 m-auto'>
                <img className='w-56 m-auto bg-cover mt-20 ' src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" />
                <div className='flex flex-col w-2/4 gap-2 items-center justify-center m-auto'>
                    <h1 className='flex poppins-bold text-xl'>Yoqtirishlarda hozircha mahsulot yo'q.</h1>
                    <h2 className='flex poppins-semibold'>Bosh sahifadagi termalardan boshlang yoki kerakli kitobni tanlang !</h2>
                    <button onClick={menyuHandler} className='p-2 text-white font-semibold w-36 bg-cyan-600 hover:bg-cyan-500 ease-linear duration-150 rounded'>Kitoblar</button>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full bg-gray-200 min-h-screen p-20'>
            <div className='w-full flex flex-col gap-4'>
                {
                    choosenss?.map(item => <ChoosenCart key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default Choosens