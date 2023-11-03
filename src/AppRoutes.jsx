import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, OnlineTherapy, Team } from './app/pages'
import { Navbar } from './app/components'

export const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team />} />
                <Route path='/therapy' element={<OnlineTherapy />} />           

                <Route path='/*' element={<Navigate to={<Home />} />} />
            </Routes>

        </div>
    )
}