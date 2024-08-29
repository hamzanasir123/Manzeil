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
                                 src="src\assets\shopping-cart.png" alt="Cart Pic" />   
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