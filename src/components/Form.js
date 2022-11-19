import React from 'react'

export default function Form() {
  return (
    <div className='container justify my-5'>
      <form>
        <div className='form-group'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' className='form-control' id='fname' placeholder='Enter first name' />
        </div>
        <div className='form-group'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' className='form-control' id='lname' placeholder='Enter last name' />
        </div>
        <div className='form-group'>
            <label htmlFor='contact'>Contact</label>
            <input type='text' className='form-control' id='contact' placeholder='Enter contact' />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input type='email' className='form-control' id='email' placeholder='Enter email' />
        </div>
        <div className='form-group'>
            <button className='nav-btn'>
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}
