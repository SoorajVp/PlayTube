
const VideoCardShimmer = () => {
    return (
        <div className='cursor-pointer text-black animate-pulse'>
            <div className='h-24 md:h-40 w-full bg-neutral-300 rounded-md'></div>
            <p className='mt-2 h-3 bg-neutral-300 rounded'></p>
            <p className='mt-1 h-3 bg-neutral-300 rounded'></p>
            <p className='mt-1 h-3 bg-neutral-300 rounded w-2/3'></p>
            <p className='mt-1 h-3 bg-neutral-300 rounded w-2/3'></p>
        </div>
    )
}

export default VideoCardShimmer