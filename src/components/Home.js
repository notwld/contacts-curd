import React,{useState} from 'react'
import './stylesheets/custom_style.css'
import "./stylesheets/Card.css"
import { useLocation } from 'react-router-dom';

export default function Table(props) {
  const { state } = useLocation();
  const [deleteData,setDeleteData] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [dateModal, setDateModal] = useState(false)
  
  const [contact,setContact] = useState({
    image: "https://joeschmoe.io/api/v1/random"
  })

  const [copyContact, setCopyContact] = useState(props.data)
  


  const changeHandler = (event) => {
    setContact({...contact, [event.target.name]: event.target.value})
  }

  const numberChangeHandler = (event) => {
    setContact({...contact, [event.target.name]: event.target.value.replace(/[a-zA-Z](.*)/g, '')})
  }
  
  const filter_data = (e) => {

    if(e.target.value =="" || e.target.value == undefined){
        props.setData(copyContact)
        return
    }

    let filteredData = props.data.filter(item => item.email.includes(e.target.value) || item.fname.includes(e.target.value) || item.lname.includes(e.target.value)  || item.phone.includes(e.target.value)   );
    props.setData(filteredData)
    
  }

  const handleDelete = () => {
    let data = deleteData 
    let filteredData = props.data.filter(e=>e.email !==data.email)
    props.setData(filteredData)
    setDeleteModal(false)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    let updatedData = props.data
    updatedData[contact.index] = contact
    console.log(updatedData)
    props.setData(updatedData)
    setEditModal(false)

  }

  const toggleEditModal = (item,index) => {
    setContact({...item,index:index})
    setEditModal(!editModal)
  }

  const toggleDeleteModal = (item) => {
    setDeleteData(item)
    setDeleteModal(!deleteModal)
  }

  
  const toggleDateModal = () => {
    setDateModal(!dateModal)
  }


  const sortData =(e)=>{
    if(e == "asc"){
      let sortedData = props.data.sort((a,b)=> new Date(a.date).getTime() - 
      new Date(b.date).getTime());
      props.setData(sortedData)
      setDateModal(false)
      return
    }
    let sortedData = props.data.sort((a,b)=> new Date(b.date).getTime() - 
    new Date(a.date).getTime());
    props.setData(sortedData)
    setDateModal(false)


  }

  console.log(props.data)


  return (
    <div className='justify column'>
      <div style={{ display:"flex",flexWrap:"wrap" }} className="row my-5">
        <input style={{ marginBottom:"5px" }} type="text" id="search" placeholder="Enter text to Search" onChange={(e) => filter_data(e)} />
        <button onClick={() => toggleDateModal()} className='filter-date-btn'>
                 Order By date
             </button>
      </div>

      <h1 style={{ padding:"20px" }}>All Contacts </h1>
      <div className='main'>

        <ul class="cards">
          {
            props.data.map((item, index) => (

              <li class="cards_item">
                <div class="card">
                  <div className='card-avatar' ><img src={item.image} /></div>

                  <div class="card_content">
                    <h2 class="card_title">{item.fname} {item.lname}</h2>
                    <p class="card_text">Phone: {item.phone}</p>
                    <p class="card_text">Email: {item.email}</p>
                    <button class="btn card_btn" onClick={() => toggleEditModal(item,index)}>Edit </button>
                    <button class="btn card_btn" onClick={() => toggleDeleteModal(item,index)}>Delete </button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

  {deleteModal &&    <div className="model-div" id='model-div'>
        <div className="model">
          <div className="close" onClick={toggleDeleteModal}>x</div>
          <span className="msg">
            Are you sure?
          </span>
          <div className="btn-del" onClick={handleDelete}>Delete</div>
        </div>
      </div>}

      {editModal &&    <div className="model-div" id='model-div'>
        <div className="edit-modal" >
          <div className="close" onClick={toggleEditModal}>x</div>
          

          <form onSubmit={(e) => handleEdit(e)} >
            <h1 style={{ color:"white" }}>Edit Contact</h1>

         <div className='form-group'>
             <label style={{ color:"white" }} htmlFor='fname'>First Name</label>
             <input onChange={(e) => changeHandler(e)} value={contact.fname} name="fname" type='text' className='form-control' id='fname' placeholder='Enter first name' />
         </div>
         <div className='form-group'>
             <label style={{ color:"white" }} htmlFor='lname'>Last Name</label>
             <input onChange={(e) => changeHandler(e)} value={contact.lname}  name="lname" type='text' className='form-control' id='lname' placeholder='Enter last name' />
         </div>
         <div className='form-group'>
             <label style={{ color:"white" }} htmlFor='contact'>Contact</label>
             <input onChange={(e) => numberChangeHandler(e)} value={contact.phone}  name="phone" type='text' className='form-control' id='contact' placeholder='Enter contact' />
         </div>
         <div className='form-group'>
             <label style={{ color:"white" }} htmlFor='email'>Email address</label>
             <input onChange={(e) => changeHandler(e)} value={contact.email}  name="email" type='email' className='form-control' id='email' placeholder='Enter email' />
         </div>
         <div className='form-group'>
             <button disabled={contact.fname && contact.lname && contact.phone && contact.email ? false : true} type="submit" className={contact.fname && contact.lname && contact.phone && contact.email ? 'edit-btn ' : 'edit-btn-disabled'}>
                 Submit
             </button>
         </div>
       </form>
        </div>
      </div>}



      {dateModal &&    <div className="model-div" id='model-div'>
        <div className="model">
          <div className="close" onClick={toggleDateModal}>x</div>
          <span className="msg">
            Sort Contacts by ascending or descending based on date created
          </span>
          <div className="edit-btn" style={{ marginBottom:"5px" }} onClick={() => sortData("asc")} > Ascending</div>
          <div className="edit-btn" onClick={() => sortData("des")}> Descending</div>
        </div>
      </div>}


    </div>
  )
}
