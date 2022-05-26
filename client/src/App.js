import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [openMenu,setOpenMenu] = useState(false);
  const [currentId,setCurrentId] = useState(null);
  return (
    <div onClick={()=>{if(openMenu) setOpenMenu(false)}} style = {{height:"100vh"}}>
      <header>
        <Navbar openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
      </header>
      <Outlet context = {[currentId,setCurrentId]}/>
    </div>
  )
}

export default App