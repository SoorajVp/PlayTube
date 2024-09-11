import { useEffect } from 'react'
import Categories from '../components/Header/Categories'
import VideoContainer from '../components/Video/VideoContainer'

const Home = () => {
    useEffect(() => {
        document.title = "PlayTube"
    }, [])
    
    return (
        <>
            <Categories />
            <VideoContainer />
        </>
    )
}

export default Home