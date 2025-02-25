import EditData from "./components/EditData"
import TableData from "./components/TableData"
import Register from "./components/Register"
import { BrowserRouter ,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = '/' element={<Register/>}/>
          <Route path = '/table' element={<TableData/>}/>
          <Route path = '/edit/:id' element={<EditData/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
