import React, { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import { books } from '../data/books'
import ProtectedRoutes from '../routes/ProtectedRoutes'
const Home = lazy(() => import('../pages/Home/Home'))
const Choosens = lazy(() => import('../pages/Choosens'))
const Basket = lazy(() => import('../pages/Basket'))
const Login = lazy(() => import('../pages/Login'))
const Maqolalar = lazy(() => import('../pages/Home/Maqolalar'))
const Kitoblar = lazy(() => import('../pages/Home/Kitoblar'))
const Dissertatsiyalar = lazy(() => import('../pages/Home/Dissertatsiya'))
const Monografiyalar = lazy(() => import('../pages/Home/Monografiyalar'))
const Muassasalar = lazy(() => import('../pages/Home/Muassasalar'))
const Mualliflar = lazy(() => import('../pages/Home/Mualliflar'))
const Jurnallar = lazy(() => import('../pages/Home/Jurnallar'))
const Register = lazy(() => import('../pages/Register'))

function Layout() {
    const [bookss, setBookss] = useState([])
    const [search, setSearch] = useState('')
    const searchHandler = () => {
        const choosenItem = books.find(item => item.title.toLowerCase() === search.toLowerCase())
        setBookss(choosenItem)
    }
    return (
        <>
            <Navbar searchHandler={searchHandler} setSearch={setSearch} />
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path='/choosens' element={<Choosens />} />
                    <Route path='/basket' element={<Basket />} />
                </Route>
                <Route path='/' element={<Home />} >
                    <Route path='/maqolalar' element={<Maqolalar />} />
                    <Route path='/kitoblar' element={<Kitoblar bookss={bookss} />} />
                    <Route path='/dissertatsiyalar' element={<Dissertatsiyalar />} />
                    <Route path='/monografiyalar' element={<Monografiyalar />} />
                    <Route path='/muassasalar' element={<Muassasalar />} />
                    <Route path='/mualliflar' element={<Mualliflar />} />
                    <Route path='/jurnallar' element={<Jurnallar />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>
        </>
    )
}

export default Layout;