import React from 'react'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Contact from './Components/Contact'
import ToDoList from './Components/Todolist'


import {BrowserRouter as Router,Routes,Route}   from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
       <div>
          <Navigation/>
       </div>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/todolist' element={<ToDoList/>}/>
       </Routes>
      </Router>
      
      
    </div>
  )
}
    
export default App