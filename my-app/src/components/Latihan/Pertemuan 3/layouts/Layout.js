import React from 'react'
import Footers from './components/footers/Footers'
import HeaderNav from './components/headers/HeaderNav'
import ModalPopUp from './components/modals/ModalPopUp'

export default function Layout(props) {
    return (
        <div id="main-layout">
            <HeaderNav />

            <main className='mt-20 py-10'>
                {props.children}
            </main>

            <Footers />
            <ModalPopUp />
        </div>
    )
}