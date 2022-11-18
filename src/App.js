import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Table from './components/Table';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/create" element={<Form />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
