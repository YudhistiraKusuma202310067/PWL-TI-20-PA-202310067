import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from '../../layouts/Layouts'
import Signin from '../../modules/components/Auth/Signin'
import BasePages from './BasePages'
import RCCQuiz from '../../../../Tugas/Quiz/RCC Quiz'
export default function AppRoute() {
    return (
        <Routes>
            <Route index element={<Navigate to='/home' />} />
            <Route path="signin" element={<Signin />} />
            <Route path="*" element={<Layouts> <BasePages /> </Layouts>} />
            <Route path="quiz" element={<RCCQuiz />} />
        </Routes>
    )
}