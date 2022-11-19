import React from 'react'
import './stylesheets/custom_style.css'

export default function Table() {
  const data = [
    {
      id: 1,
      fname: 'bobby',
      lname: 'wld',
      email: 'bobby@gmail.com',
      phone: '123-456-7890'
    },
    {
      id: 2,
      fname: 'ryn',
      lname: 'wld',
      email: 'ryn@gmail.com',
      phone: '123-456-7890'
    },
    {
      id: 3,
      fname: 'hrn',
      lname: 'wld',
      email: 'hrn@gmail.com',
      phone: '123-456-7890'
    },
    {
      id: 4,
      fname: 'waleed',
      lname: 'farrukh',
      email: 'waleed@gmail.com',
      phone: '123-456-7890'
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
      <table className="container table my-5" id='data-table'>
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
      </table>
    </div>
  )
}
