import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SearchPage from './search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<SearchPage/>}>
            <Route path='/search/:queryText'/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;