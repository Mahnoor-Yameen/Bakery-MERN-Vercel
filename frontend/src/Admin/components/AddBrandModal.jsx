import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { AppRoute } from '../../App';
//                         FIREBASE
import { storage } from '../../Firebase/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


function AddBrandModal({recalllData}) {

    
    // MODAL FUNCTIONS
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // USESTATES FOR Brand NAME AND IMAGE
    const [BrandName, setBrandName] = useState("")
    const [BrandImage, setBrandImage] = useState(null)

    //                      FORM SUBMIT FUNCTION
    const AddBrand = (e) => {
        e.preventDefault();

        //                               FIREBASE
        //           FIREBASE PE PIC BHEJI,URL LIYA, AXIOS SE IMAGE AND NAME POSTED ON MONGODB
        // console.log(BrandImage.name)     //Brandimage.name = actual name of image
        const storageRef = ref(storage, `images/BrandImages/${BrandImage.name}`);
        uploadBytes(storageRef, BrandImage).then((snapshot) => {   //success output = snapshot = metadata

            getDownloadURL(snapshot.ref)  //snapshot ka refernce diya k us success output pe jao
                .then((url) => {          
                    console.log(url)  //posted image url in internet =url
                    const payload={
                        BrandName,
                        BrandImage: url   //jo image bheji uska firebase se aya hua url
                    }
                    console.log(payload)    //image url,  name mil raha in object

                    axios.post(`${AppRoute}api/create-brand`, payload)
                    .then((json)=>{ setShow(false); //after post modal band krdena
                    recalllData(json.data.Brands);
                    }
                    
                    )          
                    .catch((error)=>alert(error.message))
                })
                .catch((error) => {
                    console.log(error)
                });
        })
    }

    // TASK : BRAND AND PRODUCT PE FIREBASE LAGANA
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Brand
            </Button>
            {/* MOdal pe click pe form open hota to add a new Brand */}
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* Yahan hum apna form laga rahy,*/}
                    <form onSubmit={AddBrand}>
                        <div className="mb-3">
                            <label htmlFor="BrandName" className="form-label">
                                Brand Name
                            </label>
                            <input
                                value={BrandName}
                                onChange={(e) => { setBrandName(e.target.value) }}
                                type="text"
                                className="form-control"
                                id="BrandName"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input onChange={(e) => setBrandImage(e.target.files[0])} className="form-control" type="file" id="formFile" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
                
                
            </Modal>
        </>
    );
}
export default AddBrandModal;