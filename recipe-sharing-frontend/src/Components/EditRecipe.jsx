import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


function EditRecipe() {

    const navigate = useNavigate()
 
    const [recData,setRecData] = useState({
        id: "",
        name:"",
        ingredients:"",
        instruction:""
    })

    const {id} = useParams()
    console.log(id);

    const url = "http://localhost:3001"

    // const [recData, setRecData] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`${url}/recipes/${id}`)
        console.log(response.data);
        setRecData({
            id: response.data.id,
            name:response.data.name,
            ingredients:response.data.ingredients,
            instruction:response.data.instruction
        })
    }

    const editRecipe = async() => {
        const response = await axios.put(`${url}/recipes/${id}`,recData,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response);
        navigate('/')
    }

    // console.log(recData);

    useEffect(() => {
        fetchData()
    }, [])
  

  return (
    


    <div>
    <div className="">
    <div className="container border p-5 ">
        <h3 className='text-center'>Edit Recipes</h3>
        <label htmlFor="">Id:</label> <br />
        <input value={recData.id} onChange={e => setRecData({...recData,id:e.target.value})} className='form-control' type="text" /> <br />

        <label htmlFor="">Name of Item:</label> <br />
        <input value={recData.name} onChange={e => setRecData({...recData,name:e.target.value})} className='form-control' type="text" /><br />

        <label htmlFor="">Ingredients:</label> <br />
        <input value={recData.ingredients} onChange={e => setRecData({...recData,ingredients:e.target.value})} className='form-control' type="text" /><br />

        <label htmlFor="">Intructions:</label> <br />
        <input value={recData.instruction} onChange={e => setRecData({...recData,instruction:e.target.value})}  className='form-control' type="text" /><br />

        <div className="text-center">
            <button onClick={editRecipe} className='btn btn-primary'>EDIT</button>
        </div>
    </div>
    </div>

</div>
  )
}

export default EditRecipe