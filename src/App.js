import React,{useState} from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Form from './components/Form';

function App() {

  const [data, setData] = useState([
    {
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"
    },
    {
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"

    },

  ])


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home data={data} setData={setData} />} />
      <Route path="/create" element={<Form data={data} setData={setData} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
