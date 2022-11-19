import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Form from './components/Form';

function App() {


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/create" element={<Form  />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
