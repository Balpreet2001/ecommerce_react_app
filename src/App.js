import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/categories/:id' element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
