import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AccountContextVariable } from './../../GlobalContext/AccountContext'
import CartOffCanvas from './../../Guest/components/CartOffCanvas';
import { AppRoute } from '../../App'
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap'



export default function Navigationbar() {
    const { account_state, account_dispatch } = useContext(AccountContextVariable)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Search, setSearch] = useState("")
    // API FETCHING
    const [Product, setProduct] = useState([])
    const [ManyProducts, setManyProducts] = useState([])



    // data mungwa rahy
    useEffect(() => {
        axios.get(`${AppRoute}api/get-all-product`)
            .then((json) => setProduct(json.data.Products))
            .catch((error) => console.log(error))
    }, [])

    // SEARCHBAR

    const formdone = (e) => {
        e.preventDefault()

        const searchWords = Search.split(" ");
        const filteredArray = Product.filter(obj => {
            return searchWords.every(word =>
                obj.ProductName.toLowerCase().includes(word.toLowerCase())
            );
        });
        setManyProducts(filteredArray)

        handleShow()




    }
    return (
        <>
            <div style={{ backgroundColor: "#f9e0b7" }}>
                <Navbar expand="lg" >
                    <Container className="rounded-pill border border-secondary">
                        <Navbar.Brand >
                            <Link to='/home' className='text-decoration-none text-dark'>
                                <img
                                    alt=""
                                    src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/331348631/original/1e2fb0b45ccd82d66ba913019cf80fc3c0035648.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top rounded-circle"
                                />{' '}
                                BakeHype
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto d-flex align-items-center">
                                {/* <Link className='nav-link' to="/">Home</Link> */}

                               {/* searchbar */}
                               <div className='d-flex justify-content-center'>
                                    <form >

                                        <div className="input-group my-2">
                                            <div className="form-outline" data-mdb-input-init="">
                                                <input id="search-input" placeholder='Search any Product' type="search" value={Search} onChange={(e) => setSearch(e.target.value)} className="form-control" />

                                            </div>
                                            <button id="search-button" type="button" onClick={formdone} className="btn btn-warning">
                                                <FaSearch />
                                            </button>
                                        </div>

                                    </form>


                                </div>




                                <Link className='nav-link' to="/products">Products</Link>
                                <Link className='nav-link' to="/categories">Category</Link>
                                <Link className='nav-link' to="/brands">Brands</Link>
                                <Link className='nav-link' to="/userorders">Orders</Link>
                                <Link className='nav-link' to="/Checkout">Checkout</Link>
                                <CartOffCanvas />
                                <Link className='nav-link' to="/"><button className='btn btn-outline-dark ' onClick={() => {
                                    account_dispatch({
                                        type: "LOGOUT",
                                    })


                                }}>SignOut</button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Modal show={show} onHide={handleClose} centered size='lg' style={{ backgroundColor: "#ffeb8e" }}>
                    <Modal.Header closeButton className='bg-warning'>
                        <Modal.Title>Found Products</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-center'>
                            {ManyProducts.length === 0 ? (
                                <div className="text-center">
                                    <p>No products found</p>
                                </div>
                            ) : (
                                <div className="row container">
                            {ManyProducts.map((value, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 my-3" key={index}>
                                    <Link className='text-decoration-none text-dark' to={`/get-product-by-id/${value._id}`} >
                                        <Card style={{ height: "360px" }}>
                                            <Card.Img varient="top" src={value.ProductThumbnail} className='object-fit-contain border rounded img-fluid' style={{ height: "200px" }} />
                                            <Card.Body>
                                                <div className="brand text-center">
                                                </div>
                                                <div className="text-center">
                                                    {value.ProductName.length > 20 ? value.ProductName.slice(0, 20) + '...' : value.ProductName}
                                                </div>
                                                <div className="brand text-center">
                                                    <span>Brand:  </span>
                                                    <span className="fw-semibold">{value.ProductBrand.length > 15 ? value.ProductBrand.slice(0, 15) + '...' : value.ProductBrand}</span>
                                                </div>
                                                <div className='text-center' >
                                                    <h5 className='text-danger fw-semibold  me-2 text-secondary'>Rs. {value.ProductPrice}</h5>
                                                </div>
                                            </Card.Body>
                                            <span className="position-absolute translate-start badge bg-danger" style={{
                                                padding: '5px 10px',
                                                marginTop: '10px',
                                                marginLeft: '-4px',
                                                borderRadius: '4px'
                                            }}>
                                                {value.ProductCategory.toUpperCase()}
                                            </span>


                                        </Card>
                                    </Link>






                                </div>
                            ))}
                                </div>)}
                        </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            </div>
        </>
    )
}




