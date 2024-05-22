import React, { useContext, useState } from 'react'
import { CartContextVariable } from '../../GlobalContext/CartContext';   //likhna baki
import { AccountContextVariable } from '../../GlobalContext/AccountContext'
import { decodeToken } from 'react-jwt';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { AppRoute } from '../../App'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import CheckoutQuantity from '../components/CheckoutQuantity';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


export default function Checkout() {


  const { cart_state, cart_dispatch } = useContext(CartContextVariable)
  const { account_state, account_dispatch } = useContext(AccountContextVariable)


  //   console.log(state)             token araha
  const user = decodeToken(account_state.token)


  const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.ProductPrice * product.ProductQuantity), 0)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [TrackingId, setTrackingId] = useState("")

  const [customerAddress, setcustomerAddress] = useState("")
  const [customerContact, setcustomerContact] = useState("")


  const OrderDetailSubmission = (e) => {
    e.preventDefault();


    const payload = {
      customerName: user.Username,
      customerEmail: user.Email,
      customerAddress: customerAddress,
      customerContact: customerContact,
      customerId: user._id,
      items: cart_state.cart,
      totalBill: total,
    }
    console.log(payload)

    axios.post(`${AppRoute}api/place-order`, payload)
      .then((json) => {
        setTrackingId(json.data.TrackingId)


        Swal.fire({
          title: 'Thank you for placing order',
          text: `Your Order Tracking id is: ${TrackingId}`,
          icon: 'success',
          confirmButtonText: 'Continue Shopping'
        })
      }


      )
      .catch((error) => console.log(error))



  }

  return (
    <>
      <div style={{ backgroundColor: "#f9e0b7" }}>

        <div className="container">
          <h1 className="text-center">Your Cart</h1>
        </div>
        {/* table */}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>

              </tr>
            </thead>
            <tbody>

              {
                cart_state.cart?.map((value, index) =>
                  <tr key={index}>
                    <th scope="row"><img src={value.ProductThumbnail} alt="" className="mx-1" style={{ height: '5vh', objectFit: 'contain' }} />{value.ProductName}</th>
                    <td>{value.ProductPrice}</td>
                    <td >
                      <CheckoutQuantity data={value} />
                    </td>



                    <td>{value.ProductQuantity * value.ProductPrice}</td>
                  </tr>

                )
              }

            </tbody>
          </table>
        </div>


        {/* price and order detail taking  */}

        <div className="container py-3">
          <h3 className='text-center' style={{fontWeight:"bold"}}>Total Price: {total}</h3>
          <Link to= '/orderplacement' className='text-decoration-none'>

          <Button variant="btn btn-outline-warning" className='mx-5 text-dark ' onClick={handleShow}>
            Proceed to Fill details to order
          </Button>
          </Link>

          <Modal show={show} onHide={handleClose} centered backdrop="static" className='border border-danger'>
            <Modal.Header closeButton>
              <Modal.Title className='text-center'>Shipment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={OrderDetailSubmission}>


                <div className="container">
                  <div >
                    <FloatingLabel controlId="customerAddress" label="Your Adress Please" className="mb-3 text-secondary"                                >
                      <Form.Control type="text" placeholder="customerAddress" value={customerAddress} onChange={(e) => setcustomerAddress(e.target.value)} />
                    </FloatingLabel>
                  </div>
                  <div >
                    <FloatingLabel controlId="customerContact" label="Your Contact No Please" className="mb-3 text-secondary"                                >
                      <Form.Control type="text" placeholder="customerContact" value={customerContact} onChange={(e) => setcustomerContact(e.target.value)} />
                    </FloatingLabel>
                  </div>

                  <div>
                    Total Bill: --- {total}
                  </div>

                </div>

                <button type="submit" className="btn btn-outline-warning mx-5 text-dark">
                  Submit
                </button>
              </form>

            </Modal.Body>


          </Modal>



          
        </div>
      </div>





    </>
  )
}
