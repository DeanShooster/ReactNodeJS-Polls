import { BrowserRouter, Routes,Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/home-page/HomePage';
import PollsPage from './components/polls-page/PollsPage';
import PollResultPage from './components/result-page/PollResultPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/polls/:page' element={<PollsPage />}/>
          <Route path='/results' element={<PollResultPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
