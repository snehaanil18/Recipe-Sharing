import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaWheatAwnCircleExclamation } from "react-icons/fa6";

function Header() {
    return (
        <div>
            <MDBNavbar light style={{backgroundColor:'darksalmon'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                    <FaWheatAwnCircleExclamation className='mx-3 f-4' />
                        Recipe
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header