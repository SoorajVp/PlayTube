import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { toggleSideMenu } from '../redux/slice/appSlice'
import { VIDEO_WATCH_URL } from '../constant'

const Watch = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = "Watch video | PlayTube"
    dispatch(toggleSideMenu(false))
  }, [])

  return (
    <div className='lg:flex w-full gap-4'>
      <div>
        <iframe width="1200" height="650"
          src={VIDEO_WATCH_URL + searchParams.get("v")}
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
        <div className='h-20 bg-neutral-200 dark:bg-neutral-800 rounded-md my-2'></div>
        <div className='h-20 bg-neutral-200 dark:bg-neutral-800 rounded-md my-2'></div>


      </div>
      <div className='w-full h-screen overflow-y-scroll space-y-2'>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>
        <div className='h-32 bg-neutral-200 dark:bg-neutral-800 rounded-md animate-pulse'></div>

      </div>

    </div>
  )
}

export default Watch