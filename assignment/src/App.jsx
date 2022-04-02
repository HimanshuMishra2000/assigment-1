
import './App.css'
import{Routes,Route} from "react-router-dom"
import { Home } from './components/Home'
import { Detalis } from './components/details'


function App() {
  

  return (
    <div className="App">
     
     <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Detalis/>}/>
       <Route path='*' element={"404 Page not found"}/>
     </Routes>
    </div>
  )
}

export default App
