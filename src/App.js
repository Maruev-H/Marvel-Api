import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Comics from './components/Comics/Comics'
import PersonPage from './components/Pages/PersonPage';
import ComicsPage from './components/Pages/ComicsPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/comics' element={<Comics />} />
      <Route path='/character/:id' element={<PersonPage/>}/>
      <Route path='/comics/:id' element={<ComicsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
