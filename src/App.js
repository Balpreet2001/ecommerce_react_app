import Home from './pages/Home';
import Categories from './pages/Categories';
import {Routes , Route , BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='categories' element ={<Categories />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
