import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layout'
import Home from '../modules/components/homes/Home'
import Explore from '../modules/components/explore/Explore'
import Messages from '../modules/components/messages/Messages'
import Feeds from '../modules/components/explore/widgets/Feeds'
import Reels from '../modules/components/explore/widgets/Reels'
import FYP from '../modules/components/explore/widgets/FYP'
import Profiles from '../modules/components/profiles/Profiles'

export default function AppRoute() {
    return (
        <Routes>
            <Route index element={<Layouts><Home /></Layouts>} />
            <Route path='home' element={<Layouts><Home /></Layouts>} />
            <Route path='explore' element={<Layouts><Explore /></Layouts>} >
                <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} />
            </Route>
            <Route path='messages' element={<Layouts><Messages /></Layouts>} />
            <Route path='profile' element={<Layouts><Profiles /></Layouts>} />
        </Routes>
    )
}