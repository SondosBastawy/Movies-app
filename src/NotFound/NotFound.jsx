import React from 'react'
import errorImg from '../assets/images/main_how_to_design_404_page.webp'

export default function NotFound() {
    return (
    <>
    <div className='d-flex flex-column align-content-center w-100 align-items-center'>
        <img src={errorImg} alt="Error404" className='mt-3 pt-5 w-50' />
        <h2>Page Not Found</h2>
    </div>
    </>
)
}
