import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  const { darkMode } = useSelector((store: RootState) => store.app)

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
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
