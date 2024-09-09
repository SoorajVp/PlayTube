import { useEffect, useState } from 'react'
import { VIDEOLIST_API_URL } from '../../constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos ] = useState<any>([])
    useEffect(() => {
        getVideoList()
    }, [])
    const getVideoList = async () => {
        try {
            const response = await fetch(VIDEOLIST_API_URL);
            const data = await response.json()
            setVideos(data?.items)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {videos?.map((item:any) => (
                <VideoCard key={item?.id} {...item} />
            ))}
        </div>
    )
}

export default VideoContainer