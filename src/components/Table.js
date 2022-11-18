import React from 'react'
import './stylesheets/custom_style.css'

export default function Table() {
  return (
    <table class="container table my-5">
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
      <tr>
        <td>waleed</td>
        <td>hrn</td>
        <td>bobby</td>
        <td>ryn</td>
        <td> <span className='btn-edit'>Edit</span> <span className='btn-del'>Delete</span> </td>
      </tr>
    </tbody>
  </table>
  )
}
