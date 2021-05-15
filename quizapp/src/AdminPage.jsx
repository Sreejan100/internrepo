import { Button } from 'bootstrap'
import React,{useState} from 'react'
import './AdminPage.css'
import axios from 'axios'

function AdminPage() {
    const [input,setInput] = useState({
        question:'',
        option1:'',
        option2:'',
        option3:'',
        option4:''
    })

    function handleChange(e) {
           const {name, value} = e.target;
           setInput(prevInput => {
               return {
                   ...prevInput,
                   [name]: value
               }
            
           })
    }


    function handleClick(event) {
        event.preventDefault();
        const newQuestion = {
            question:input.question,
            option1:input.option1,
            option2:input.option2,
            option3:input.option3,
            option4:input.option4
        }
        axios.post('http://localhost:3001/create',newQuestion);
    }

    return (
        <div className="adminbody d-flex p-2">
           <form>
           <h4 className="name">Enter your question here</h4>
          
           <input type="text"  name="question" onChange={handleChange} value={input.question} placeholder="Enter question"/>
           
           
            
            <h4 className="name">Enter option 1</h4>
            
           <input type="text"  name="option1" onChange={handleChange} value={input.option1} placeholder="Enter option 1"/>
  
            <h4 className="name">Enter option 2</h4>
            
           <input type="text"  name="option2" onChange={handleChange} value={input.option2} placeholder="Enter option 2" width="70px"/>
           
            <h4 className="name" >Enter option 3</h4>
          
           <input type="text" name="option3" onChange={handleChange} value={input.option3} placeholder="Enter option 3"/>
           
            <h4 className="name" > Enter option 4</h4>
            
           <input type="text"  name="option4"onChange={handleChange} value={input.option4} placeholder="Enter option-4"/>
           <br/>
            <button onClick={handleClick} className="btn btn-primary btn-lg button-mj">Submit</button>
           </form>
        </div>
    )
}

export default AdminPage
