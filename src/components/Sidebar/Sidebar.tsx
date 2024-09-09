import { AiFillHome, AiOutlineLike } from 'react-icons/ai'
import { MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import { RiPlayList2Fill } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { VscHistory } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const { openMenu } = useSelector((store: RootState) => store.app)
    console.log(openMenu)
    return (
        <div className={`h-full dark:bg-neutral-900 dark:text-gray-100  transition-all duration-300 ease-in-out 
                        ${openMenu ? 'w-48' : 'w-0 overflow-hidden'}`}>
            <div className='p-2 dark:bg-neutral-900 dark:text-gray-100'>
                <ul className='space-y-1'>
                    <Link to="/">
                        <li className='flex items-center gap-3 p-1 bg-gray-100 dark:bg-neutral-800 rounded-lg'>
                            <AiFillHome size={30} className='pl-2' />
                            <span className='text-xs'>Home</span>
                        </li>
                    </Link>
                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <SiYoutubeshorts size={30} className='pl-2' />
                        <span className='text-xs'>Shorts</span>
                    </li>
                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <MdSubscriptions size={30} className='pl-2' />
                        <span className='text-xs'>Subscriptions</span>
                    </li>

                </ul>
                <hr className='my-2 border-neutral-500' />
                <ul className='space-y-1'>
                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <VscHistory size={30} className='pl-2' />
                        <span className='text-xs'>History</span>
                    </li>
                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <RiPlayList2Fill size={30} className='pl-2' />
                        <span className='text-xs'>Playlists</span>
                    </li>

                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <MdOutlineWatchLater size={30} className='pl-2' />
                        <span className='text-xs'>Watch Later</span>
                    </li>
                    <li className='flex items-center gap-3 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg'>
                        <AiOutlineLike size={30} className='pl-2' />
                        <span className='text-xs'>Liked videos</span>
                    </li>
                </ul>
                <hr className='my-2 border-neutral-500' />
            </div>
        </div>
    )
}

export default Sidebar