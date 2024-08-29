import React from 'react'
import {Link, NavLink} from 'react-router-dom'



export default function Header() {
    return (
        <header className="bg-slate-300 sticky z-50 top-0">
            <nav className="bg-transparent px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://manzeil.com/wp-content/uploads/2024/08/cropped-Manzeil-Final-Logo-01-1536x616.png"
                            className="mr-7 h-18 w-44"
                            alt="Logo"
                        />
                    </Link>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    MEN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    WOMEN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    UNISEX
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    SHOP
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    MY ACCOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                 <img
                                 className='h-5'
                                 src="data:image/png;base64,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" alt="Cart Pic" />   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                 <img
                                 className='h-5'
                                 src="https://cdn-icons-png.flaticon.com/128/751/751463.png" alt="Cart Pic" />   
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}