import './App.css';
import { MatchInfoPage } from './pages/MatchInfoPage';
import { MatchesOverviewPage } from './pages/MatchesOverviewPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<MatchesOverviewPage />} />
              <Route path='/detail/:id' element={<MatchInfoPage />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
