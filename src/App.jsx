import './App.css'
import Home from "./pages/home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Paragraph from './Components/Paragraph';
import Image from './Components/Image';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/paragraph' element={<Paragraph/>}/>
          <Route path="/image" element={<Image/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
