import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-300 flex justify-around items-center  h-14'>
            <div className='logo font-bold text-2xl'>
                <span className='text-green-600'> &lt;</span>
                <span className='text-blue-900'>Pass</span>
                <span className='text-green-600'>OP/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-5'>
                    <a className='hover:font-bold text-blue-900' href="/">Home</a>
                    <a className='hover:font-bold text-blue-900' href="#">About</a>
                    <a className='hover:font-bold text-blue-900' href="#">Contact us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
