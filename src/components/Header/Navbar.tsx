import { CiSearch } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { LuMenu } from "react-icons/lu";
import { MdDarkMode, MdKeyboardVoice, MdLightMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, toggleSideMenu } from '../../redux/slice/appSlice';
import { RootState } from '../../redux/store';
import { IoArrowBackSharp, IoPlayForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const { darkMode, openMenu } = useSelector((store: RootState) => store.app)
    const [ openSearch, setOpenSearch] = useState<boolean>(false)
    const dispatch = useDispatch();

    const changeThemeMode = () => {
        dispatch(toggleDarkMode())
    }

    const handleMenuOpen = () => {
        dispatch(toggleSideMenu(openMenu ? false : true))
    }

    if (openSearch) {
        return (
            <div className=' w-full p-2 px-4 dark:bg-neutral-900'>
                <div className='flex items-center justify-center'>
                    <div onClick={() => setOpenSearch(false)} className='flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full h-full p-1.5 cursor-pointer'>
                        <IoArrowBackSharp size={28} className='text-neutral-900 dark:text-neutral-100' />
                    </div>
                    <input type="text" className='text-sm ml-2 py-1.5 pl-3 outline-none border border-neutral-400 dark:border-neutral-600 dark:text-white dark:bg-neutral-900 rounded-l-full w-full' placeholder='Search' />
                    <button className='bg-gray-100 dark:bg-neutral-800 h-full py-1.5 px-4 border border-neutral-400 dark:border-neutral-600 rounded-r-full'>
                        <CiSearch size={25} className='dark:text-white' />
                    </button>
                    <div className='ml-2 flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full h-full p-1.5 '>
                        <MdKeyboardVoice size={30} className='text-neutral-900 dark:text-neutral-100' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='grid grid-flow-col w-full p-2 px-4 dark:bg-neutral-900'>
            <div className='col-span-2 flex items-center gap-4'>
                <LuMenu size={25} className='text-neutral-900 dark:text-gray-200 cursor-pointer' onClick={handleMenuOpen} />
                <Link to="/" className='flex items-center '>
                    <IoPlayForwardCircleSharp size={40} className='text-indigo-500' />
                    <h4 className='text-lg font-bold pl-1 text-neutral-800 dark:text-gray-200'>PlayTube</h4>
                </Link>
            </div>
            <div className='hidden col-span-9 md:flex items-center justify-center'>
                <input type="text" className='text-sm py-1.5 pl-3 outline-none border border-neutral-400 dark:border-neutral-600 dark:text-white dark:bg-neutral-900 rounded-l-full w-1/2' placeholder='Search' />
                <button className='bg-gray-100 dark:bg-neutral-800 h-full py-1.5 px-4 border border-neutral-400 dark:border-neutral-600 rounded-r-full'>
                    <CiSearch size={25} className='dark:text-white' />
                </button>
                <div className='flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full h-full px-1.5 ml-2 '>
                    <MdKeyboardVoice size={30} className='text-neutral-900 dark:text-neutral-100' />
                </div>
            </div>

            <div className='col-span-9 flex items-center gap-3 justify-end' >
                <div onClick={() => setOpenSearch(true)} className='md:hidden flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full h-full px-1.5 cursor-pointer'>
                    <CiSearch size={30} className='text-neutral-900 dark:text-neutral-100' />
                </div>
                <div className='md:hidden flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full h-full px-1.5 '>
                    <MdKeyboardVoice size={30} className='text-neutral-900 dark:text-neutral-100' />
                </div>

                {darkMode ?
                    <MdLightMode size={32} className='dark:text-white cursor-pointer' onClick={changeThemeMode} /> :
                    <MdDarkMode size={34} className='dark:text-white cursor-pointer' onClick={changeThemeMode} />
                }
                <FaUserCircle size={30} className='dark:text-white' />
            </div>
        </div>
    )
}

export default Navbar