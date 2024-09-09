import { useSelector } from "react-redux"
import Categories from "./components/Header/Categories"
import Navbar from "./components/Header/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import VideoContainer from "./components/Video/VideoContainer"
import { RootState } from "./redux/store"


function App() {

  const { darkMode } = useSelector((store: RootState) => store.app)
  // console.log(darkMode)

  return (
    <div className={`h-screen w-full flex flex-col ${darkMode && 'dark'}`}>
      <div className="flex-none">
        <Navbar />
      </div>
      <div className="flex flex-1 dark:bg-neutral-900 overflow-hidden">
        <div className="hidden md:block h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto min-h-screen p-3">
          <Categories />
          <VideoContainer />
        </div>
      </div>
    </div>
  )
}

export default App
