import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import axios from 'axios'


import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import ViewRecipe from './ViewRecipe';

function AllRecipe() {
   const url="http://localhost:3001"

    const [recData,setRecData] = useState([])

    const fetchData = async() => {
        const response = await axios.get(`${url}/recipes`)
        setRecData(response.data)
        console.log(recData.map(n=>n.id));
        console.log(response.data);
      }

      useEffect(() => {
        fetchData()
      },[])

  return (
    <div>
        <Link to={'/add'} >
            <div className='d-flex justify-content-end m-5'>
                <button className='btn btn-success'>ADD</button>
            </div>
        </Link>
          <h3 className='text-center'>All Recipes</h3>
        {recData.length>0?recData.map(item => (
        <Link to={`/view/${item.id}`}>
            {/* <ViewRecipe data={item} /> */}
        <MDBCard className='border px-3 mx-3 mb-4' style={{}}>
      <MDBCardBody>
        <MDBCardTitle>{item.name}</MDBCardTitle>
        <MDBCardText>
          <span className='fw-bolder'>Ingredients: </span> <br />
          {item.ingredients}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Link>
    )):'no recipe fetched'}


    </div>
  )
}

export default AllRecipe