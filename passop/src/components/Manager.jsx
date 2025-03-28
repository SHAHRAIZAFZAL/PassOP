import React from 'react'
import { useRef, useState } from 'react';



const Manager = () => {
    const ref = useRef()
    const showPassword = () => {
        alert("show the password");
        if (ref.current.src.includes("/eyecross.png")) {
            ref.current.src = "/eye.png"
        }
        else {
            ref.current.src = "/eyecross.png"
        }

    }



    const [form, setform] = useState({ site: "", username: "", password: "" })




    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-30 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
      linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 
       blur-[100px]"></div></div>



            <div className='mx-auto  max-w-6xl p-10 '>
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'> &lt;</span>
                    <span className='text-blue-900'>Pass</span>
                    <span className='text-green-600'>OP/&gt;</span>
                </h1>
                <p className=' text-green-900 text-lg text-center p-6'>
                     Your own password Manager
                </p>





                <div className=' text-black flex flex-col items-center gap-4'>
                    <input value={form.site} placeholder='Enter website URL' className='rounded-full border-2 border-green-700 w-full p-6 py-1 ' type='text' name='' id='' />

                    <div className='flex gap-2  w-full justify-between '>

                        <input value={form.username} placeholder='Enter username' className='rounded-full border-2 border-green-700 w-full p-6 py-1 ' type='text' name='' id='' />
                        <div className='relative w-full'>

                            <input value={form.password} placeholder='Enter password' className='rounded-full border-2 border-green-700 w-full p-6 py-1 ' type='text' name='' id='' />

                            <span className='absolute right-[1px] top-[1px]  cursor-pointer' onClick={showPassword}  >
                                <img ref={ref} className='p-2' width={34} src="/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>



                    <button className='bg-green-500 flex rounded-full mx-auto px-6 py-1 items-center gap-2 mt-5 hover:bg-green-400  hover:scale-110 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager
