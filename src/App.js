import React,{useState} from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Create from './components/Create';

function App() {

  const [data, setData] = useState([
    {
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random",
      date: "2022-11-20T18:09:40.483Z"
    },
    {
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random",
      date: "2022-11-21T18:09:40.483Z"

    },
    {
      fname: 'hamza',
      lname: 'hoda',
      email: 'hamza@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random",
      date: "2022-11-19T18:09:40.483Z"

    },

  ])


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home data={data} setData={setData} />} />
      <Route path="/create" element={<Create data={data} setData={setData} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
