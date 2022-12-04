import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-cyan-400 text-white flex justify-between p-6 mb-5'>
        <p className='ml-3 text-3xl'>Redux Blog</p>
        <ul className='mr-3'>
            <li className='inline text-xl'><Link to={"/"}>Home</Link></li>
            <li className='inline ml-4 text-xl'><Link to={"/post"}>Post</Link></li>
        </ul>
    </div>
  )
}

export default Header