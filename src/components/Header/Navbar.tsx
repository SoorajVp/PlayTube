import { CiSearch } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { LuMenu } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { RxVideo } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/slice/appSlice';
import { RootState } from '../../redux/store';

const Navbar = () => {
    const { darkMode } = useSelector((store: RootState) => store.app)
    const dispatch = useDispatch();

    const changeThemeMode = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <div className='grid grid-flow-col w-full p-2 px-4 dark:bg-neutral-900'>
            <div className='col-span-2 flex items-center gap-4'>
                <LuMenu size={25} className='text-neutral-900 dark:text-gray-200' />
                <div className='flex items-center '>
                    <RxVideo size={35} className='text-indigo-500' />
                    <h4 className='text-lg font-bold pl-1 text-neutral-800 dark:text-gray-200'>PlayTube</h4>
                </div>
            </div>
            <div className='col-span-9 flex items-center justify-center'>
                <input type="text" className='text-sm py-1.5 pl-3 border border-neutral-400 dark:border-neutral-600 dark:text-white dark:bg-neutral-900 rounded-l-full w-1/2' placeholder='Search' />
                <button className='bg-gray-100 dark:bg-neutral-800 h-full py-1.5 px-4 border border-neutral-400 dark:border-neutral-600 rounded-r-full'>
                    <CiSearch size={25} className='dark:text-white' />
                </button>
            </div>
            <div className='col-span-9 flex items-center gap-3 justify-end' >
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