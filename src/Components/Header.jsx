import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black p-6 text-white flex items-center justify-between'>

        <Link to="/" className='text-3xl text-decoration-none text-white'>WeCare</Link>
        <p>Call us : 000876567</p>

    </div>
  )
}

export default Header