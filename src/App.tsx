import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        console.log('passed1')
        <Route path='/' element={<MainLayout />}>
          console.log('passed2')
          <Route index element={<HomePage />} />
          console.log('passed3')

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App