import Profile from './components/profile/profile';
import Result from './components/result/result';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Classroom from './components/classroom/classroom';
import Feedback from './components/classroom/feedback/feedback';

function App() {
  return (
    <BrowserRouter>
  
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Profile />}/>
        <Route exact path='/result' element={<Result />}/>
        <Route exact path='/classroom' element={<Classroom />}/>
        <Route exact path='/feedback' element={<Feedback />}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;

