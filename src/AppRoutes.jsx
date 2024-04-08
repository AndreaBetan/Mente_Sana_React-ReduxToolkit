import { Navigate, Route, Routes } from 'react-router-dom'
import { Details, Home, OnlineTherapy, Team } from './app/pages'
import { Footer, Navbar } from './app/components'

export const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team />} />
                <Route path='/team/:uuid' element={<Details />} />
                <Route path='/therapy' element={<OnlineTherapy />} />

                <Route path='/*' element={<Navigate to={<Home />} />} />
            </Routes>
            <Footer />
        </div>
    )
}