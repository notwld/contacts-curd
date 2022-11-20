import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Form(props) {

  let navigation = useNavigate();

  const [contact,setContact] = useState({
    image: "https://joeschmoe.io/api/v1/random"

  })

  const changeHandler = (event) => {
    setContact({...contact, [event.target.name]: event.target.value})
  }

  const numberChangeHandler = (event) => {
    setContact({...contact, [event.target.name]: event.target.value.replace(/[a-zA-Z](.*)/g, '')})
  }
  
  const createContact = (e) =>{
    e.preventDefault()
    console.log(contact)
    let data = [...props.data,contact]
    props.setData(data)
    navigation("/",{ replace: true },{state:{data : data, setData:props.setData  }});

  }

  return (
   
   
    <div className='main '>

        <ul class="cards" style={{ width:"100%" }}>
        
          <li class="cards_item">
            <div class="card">
      
              <div class="card_content">
                <h2 class="card_title"></h2>
            
                <form onSubmit={(e) => createContact(e)}  className='card' >
         <div className='form-group'>
             <label htmlFor='fname'>First Name</label>
             <input onChange={(e) => changeHandler(e)} value={contact.fname} name="fname" type='text' className='form-control' id='fname' placeholder='Enter first name' />
         </div>
         <div className='form-group'>
             <label htmlFor='lname'>Last Name</label>
             <input onChange={(e) => changeHandler(e)} value={contact.lname}  name="lname" type='text' className='form-control' id='lname' placeholder='Enter last name' />
         </div>
         <div className='form-group'>
             <label htmlFor='contact'>Contact</label>
             <input onChange={(e) => numberChangeHandler(e)} value={contact.phone}  name="phone" type='text' className='form-control' id='contact' placeholder='Enter contact' />
         </div>
         <div className='form-group'>
             <label htmlFor='email'>Email address</label>
             <input onChange={(e) => changeHandler(e)} value={contact.email}  name="email" type='email' className='form-control' id='email' placeholder='Enter email' />
         </div>
         <div className='form-group'>
             <button disabled={contact.fname && contact.lname && contact.phone && contact.email ? false : true} type="submit" className={contact.fname && contact.lname && contact.phone && contact.email ? 'nav-btn' : 'btn-disabled'}>
                 Submit
             </button>
         </div>
       </form>




              </div>
            </div>
          </li>
      </ul>
      </div>
   
   
   
  //  <div className='container justify my-5'>
  //     <form className='card' onClick={(e) => createContact(e)}>
  //       <div className='form-group'>
  //           <label htmlFor='fname'>First Name</label>
  //           <input onChange={(e) => changeHandler(e)} value={contact.fname} name="fname" type='text' className='form-control' id='fname' placeholder='Enter first name' />
  //       </div>
  //       <div className='form-group'>
  //           <label htmlFor='lname'>Last Name</label>
  //           <input onChange={(e) => changeHandler(e)} value={contact.lname}  name="lname" type='text' className='form-control' id='lname' placeholder='Enter last name' />
  //       </div>
  //       <div className='form-group'>
  //           <label htmlFor='contact'>Contact</label>
  //           <input onChange={(e) => numberChangeHandler(e)} value={contact.phone}  name="phone" type='text' className='form-control' id='contact' placeholder='Enter contact' />
  //       </div>
  //       <div className='form-group'>
  //           <label htmlFor='email'>Email address</label>
  //           <input onChange={(e) => changeHandler(e)} value={contact.email}  name="email" type='email' className='form-control' id='email' placeholder='Enter email' />
  //       </div>
  //       <div className='form-group'>
  //           <button disabled={contact.fname && contact.lname && contact.phone && contact.email ? false : true} type="button" className={contact.fname && contact.lname && contact.phone && contact.email ? 'nav-btn' : 'btn-disabled'}>
  //               Submit
  //           </button>
  //       </div>
  //     </form>
  //   </div>
  )
}
