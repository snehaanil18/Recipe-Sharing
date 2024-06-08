import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddRecipe() {

    const navigate = useNavigate()

    const [recData,setRecData] = useState({
        id: "",
        name:"",
        ingredients:"",
        instruction:""
    })

    const url="http://localhost:3001"

    const addRecipe = async() => {
        const response = await axios.post(`${url}/recipes`,recData,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response)
        navigate('/')
    }

    
  return (
    <div>
        <div className="">
        <div className="container border p-5 ">
            <h3 className='text-center'>Add Recipes</h3>
            <label htmlFor="">Id:</label> <br />
            <input onChange={e => setRecData({...recData,id:e.target.value})} className='form-control' type="text" /> <br />

            <label htmlFor="">Name of Item:</label> <br />
            <input onChange={e => setRecData({...recData,name:e.target.value})} className='form-control' type="text" /><br />

            <label htmlFor="">Ingredients:</label> <br />
            <input onChange={e => setRecData({...recData,ingredients:e.target.value})} className='form-control' type="text" /><br />

            <label htmlFor="">Intructions:</label> <br />
            <input onChange={e => setRecData({...recData,instruction:e.target.value})}  className='form-control' type="text" /><br />

            <div className="text-center">
                <button onClick={addRecipe} className='btn btn-primary'>ADD</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default AddRecipe