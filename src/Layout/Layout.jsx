import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
 
  return (<>
    <Navbar />
    <Outlet ></Outlet>
    </>
  )
}
