import '../assets/App.css'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import PageProject from './pageProjects';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProjectsPage' element={<PageProject/>}/>
      </Routes>
    </>
  )
}

export default App
