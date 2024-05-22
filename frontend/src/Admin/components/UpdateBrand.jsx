import React from 'react'
import { GrUpdate } from 'react-icons/gr'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { AppRoute } from '../../App';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
//                         FIREBASE
import { storage } from '../../Firebase/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function UpdateBrand() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); }

    const [_id, set_id] = useState("")
    const [BrandName, setBrandName] = useState("")
    const [BrandImage, setBrandImage] = useState("")



    //                      FORM SUBMIT FUNCTION
    const UpdateBrand = (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/BrandImages/${BrandImage?.name}`);
        uploadBytes(storageRef, BrandImage).then((snapshot) => {   //success output = snapshot = metadata

            getDownloadURL(snapshot.ref)  //snapshot ka refernce diya k us success output pe jao
                .then((url) => {
                    console.log(url)  //posted image url in internet =url
                    const payload = {
                        _id,
                        BrandName,
                        BrandImage: url   //jo image bheji uska firebase se aya hua url
                    }
                    console.log(payload)

                    axios.put(`${AppRoute}api/update-brand`, payload).then((json) => {
                        console.log(json.data)
                    })



                })
        })





    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <GrUpdate />
            </Button>

            <Modal show={show} centered backdrop="static" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE BRAND</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={UpdateBrand}>
                        <div className="row">
                            <div className="col">
                                <FloatingLabel controlId="brandid" label="brand id" className="mb-3 text-secondary"                                >
                                    <Form.Control type="text" placeholder="brand id" value={_id} onChange={(e) => set_id(e.target.value)} />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FloatingLabel controlId="BrandName" label="BrandName" className="mb-3 text-secondary"                                >
                                    <Form.Control type="text" placeholder="BrandName" value={BrandName} onChange={(e) => setBrandName(e.target.value)} />
                                </FloatingLabel>
                            </div>
                        </div>



                        <div className="mb-3">
                            <label htmlFor="BrandImage" className="form-label">
                                BrandImage
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="BrandImage" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>



                </Modal.Body>

            </Modal>

        </>
    )
}
