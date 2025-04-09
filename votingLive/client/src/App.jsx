import Web3StateProvider from './context/Web3StateProvider'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

function App() {


  return (
    <>
      <h1>Voting App</h1>
      <Web3StateProvider>
     <RouterProvider router={routes}></RouterProvider>
      </Web3StateProvider>
    
    </>
  )
}

export default App
