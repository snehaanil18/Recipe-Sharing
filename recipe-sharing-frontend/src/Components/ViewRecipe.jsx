import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function ViewRecipe({item}) {
    const { id } = useParams()
    console.log(id);

    const navigate = useNavigate()

    // console.log(item);
    const url = "http://localhost:3001"

    const [recData, setRecData] = useState([])

    const fetchData = async () => {
        try{
            const response = await axios.get(`${url}/recipes/${id}`)
            setRecData(response.data)
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }

    }

    const deleteRecipe = async() => {
        try{
            const response = await axios.delete(`${url}/recipes/${id}`)
            console.log(response);
            navigate('/')
        }
        catch(err){
            console.log(err);
        }
     
    }

    // console.log(recData);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <div className="d-flex my-2 justify-content-end">
            <Link to={`/edit/${id}`} >
                <button className='btn btn-primary  mx-2'><FaRegEdit /></button>
            </Link>
            <button onClick={deleteRecipe} className='btn btn-danger mx-2'><FaTrash /></button>
            </div>
    

            <MDBCard className='border p-3 mx-5 my-3' style={{width:'1280px'}}>
                <MDBCardBody>
                    <MDBCardTitle>{recData.name}</MDBCardTitle>
                    <br />
                    <MDBCardText>
                        <span className='fw-bolder'>Ingredients :</span> <br />
                        {recData.ingredients} <br /> <br />
                        <span className='fw-bolder'>Instructions :</span> <br />
                        {recData.instruction}
                    </MDBCardText>


                </MDBCardBody>
            </MDBCard>

        </div>
    )
}

export default ViewRecipe