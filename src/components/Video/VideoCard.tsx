import moment from 'moment'
import placeholder from "/placeholder_img.jpg"
import { formatNumber } from '../../utils/formatNumber'
import { GoDotFill } from 'react-icons/go'

const VideoCard = ({ snippet, statistics }: any) => {
    const { title, channelTitle, publishedAt, thumbnails } = snippet
    return (
        <div className='cursor-pointer text-black'>
            <img src={thumbnails?.maxres?.url ?? placeholder} alt="thumbnail" className='rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105' />
            <p className='text-sm font-bold dark:text-white mt-1'>{title}</p>
            <p className='text-nowrap text-xs font-medium text-neutral-700 dark:text-neutral-300'>{channelTitle}</p>
            <div className='flex items-center gap-1 text-neutral-700 dark:text-neutral-300'>
                <p className='text-nowrap text-xs'>{formatNumber(parseInt(statistics?.viewCount)) } views</p>
                <GoDotFill size={15} className='text-neutral-500' />
                <p className='text-nowrap text-xs'>{moment(publishedAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default VideoCard