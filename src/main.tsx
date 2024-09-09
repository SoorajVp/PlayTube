import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
  ,
)
