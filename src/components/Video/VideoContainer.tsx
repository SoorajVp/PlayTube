import { useEffect, useState } from 'react'
import { VIDEOLIST_API_URL } from '../../constant'
import VideoCard from './VideoCard'
import ErrorComp from '../ErrorComp'
import { useDispatch } from 'react-redux'
import { toggleSideMenu } from '../../redux/slice/appSlice'

const VideoContainer = () => {
    const [videos, setVideos] = useState<any>([])
    const [error, setError] = useState<string>("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggleSideMenu(true))
        getVideoList()
    }, [])

    const getVideoList = async () => {
        const response = await fetch(VIDEOLIST_API_URL);
        const data = await response.json()
        console.log(data?.items)
        if (data?.error) {
            setError(data?.error?.message)
        }
        setVideos(data?.items)
    }

    if (error) return <ErrorComp error={error} />

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {videos?.map((item: any) => (
                <VideoCard key={item?.id} {...item} />
            ))}
        </div>
    )
}

export default VideoContainer