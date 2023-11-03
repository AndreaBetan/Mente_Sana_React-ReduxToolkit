import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './app/pages/Home'


export const AppRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/*' element={<Navigate to={<Home />} />} />
            </Routes>

        </div>
    )
}