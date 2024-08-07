import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes,Route } from 'react-router-dom';
import Quest1 from './components/quest1';
import Quest2 from './components/quest2';
import Quest3 from './components/quest3';
import Quest4 from './components/quest4';
import About from './components/About';
import Emotion from './components/Emotion';



function App() {
  return (
    <>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/emotion' element={<Emotion/>}></Route>
          <Route path='/quest1' element={<Quest1/>}></Route>
          <Route path='/quest2' element={<Quest2/>}></Route>
          <Route path='/quest3' element={<Quest3/>}></Route>
          <Route path='/quest4' element={<Quest4/>}></Route> 
      </Routes>
    </>
  );
}

export default App;
