import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'
function Github() {
//    const data =  useLoaderData()
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hamzanasir123')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [] )
    return (
        <>
        <div className='  text-center sm:text-center mt-5 mb-5'>
        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-red-700 rounded-lg hover:opacity-75"
                            to="https://github.com/hamzanasir123?tab=repositories"
                        >
                            <svg
                                fill="White"
                                width="24"
                                height="24"
                                // xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Visit Profile
                        </Link>
        </div>
        </>
        // <div
        // className='bg-gray-600 text-white text-center text-3xl m-4 p-4'
        // >Github Followers : {data.followers}
        // {/* <img 
        // className='rounded-full size-44  p-4 '
        // src={data.avatar_url} alt="Github Pic" /> */}
        // </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  fetch('https://api.github.com/users/hamzanasir123')
    return  response.json()
}
