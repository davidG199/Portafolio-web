import '../assets/App.css'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/home'
import Projects from '../components/projects';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProjectsPage' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
