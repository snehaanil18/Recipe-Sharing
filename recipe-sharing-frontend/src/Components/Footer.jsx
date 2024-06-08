import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter style={{backgroundColor:'darksalmon'}} className='text-center text-light fixed-bottom text-lg-left'>
                <div className='text-center p-3'>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                       recipesharing
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer