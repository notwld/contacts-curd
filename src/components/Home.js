import React from 'react'
import './stylesheets/custom_style.css'
import "./stylesheets/Card.css"

export default function Table() {
  const data = [
    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"
    },
    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"

    },
    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"

    },
    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"

    },    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890',
      image: "https://joeschmoe.io/api/v1/random"

    },
  ]
  const  filter_data = () => {
    var input, filter, table, tr, td, cell, i, j;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("data-table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";

      td = tr[i].getElementsByTagName("td");
      for ( j = 0; j < td.length; j++) {
        cell = tr[i].getElementsByTagName("td")[j];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          }
        }
      }
    }
  }

  return (
    <div className='justify column'>
      <div className="row my-5">
        <input type="text" id="search" placeholder="Search" onKeyUp={filter_data} />
        <button className="search-btn" onClick={filter_data}>Search</button>
      </div>

        <h1>Responsive Card Grid Layout</h1>
        <div className='main'>

        <ul class="cards">
      {
      data.map((item, index) => (
        
          <li class="cards_item">
            <div class="card">
              {/* <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div> */}
              <div className='card-avatar' ><img src={item.image}/></div>
      
              <div class="card_content">
                <h2 class="card_title">{item.fname} {item.lname}</h2>
                <p class="card_text">Phone: {item.phone}</p>
                <p class="card_text">Email: {item.email}</p>
                <button class="btn card_btn">Edit </button>
                <button class="btn card_btn">Delete </button>
              </div>
            </div>
          </li>
      ))
}
      </ul>
      </div>

      {/* <table className="container table my-5" id='data-table'>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-del">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}


    </div>
  )
}
