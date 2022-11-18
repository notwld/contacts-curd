import React from 'react'
import './stylesheets/table.css'

export default function Table() {
  return (
   <div className="table-container">
     <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>555-555-5555</td>
                <td>Joh@gmail.com</td>
            </tr>
        </tbody>
    </table>
   </div>
  )
}
