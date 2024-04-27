import Navbar from "./Componet/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./Componet/Navbar/Home";
import Sweet from "./Componet/Navbar/Sweet";
import Bakeries from "./Componet/Navbar/Bakeries";
import Chocolates from "./Componet/Navbar/Chocolates";
import Foods from "./Componet/Navbar/Foods";

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" elememt= {<Home/>}/>
      <Route path="/sweet" elememt= {<Sweet/>}/>
      <Route path="/bakeries" elememt= {<Bakeries/>}/>
      <Route path="/chocolates" elememt= {<Chocolates/>}/>
      <Route path="/foods" element= {<Foods/>}/>
    </Routes>
    
    </>
  )
}

export default App
