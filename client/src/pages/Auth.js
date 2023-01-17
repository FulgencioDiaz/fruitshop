
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  
}
from 'mdb-react-ui-kit';



const apiEndpoint = `http://localhost:3000/users/`;

const Auth = () => {
     
    return (
    <>


    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='3'>
            <MDBCardImage src='https://res.cloudinary.com/dkcp72omy/image/upload/v1673609481/products/Cat-resting-in-a-banana-plant-on-top-of-a-bunch-of-bananas_slmy88.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='7'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>


              <MDBBtn className="mb-4 w-100">Entrar</MDBBtn>

            </MDBCardBody>

          </MDBCol>
          
          

        </MDBRow>
        

      </MDBCard>
    </MDBContainer>

    </>
    );
  };
  
  export default Auth;
  