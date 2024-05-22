import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AppRoute } from '../../App'

import { Link } from 'react-router-dom'
export default function Brands() {

  const [Brand, setBrands] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-brands`)
      .then((res) => setBrands(res.data.Brands))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#f9e0b7" }}>

      <h2 className='text-center py-3'>OUR COLLABORATIVE BRANDS</h2>

      <div className="container py-2">
        <div className="row">

          {
            Brand.map((value, index) =>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2" style={{backgroundColor:"#f9e0b7"}} key={index}>
            <Link to={`/brands/${value.BrandName}`} className='text-decoration-none'>
                <div className="card" >
                    <img src={value.BrandImage} className='object-fit-contain border rounded img-fluid' style={{ height: "200px" }} alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            {value.BrandName}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
            )
          }
        </div>

      </div>
      </div>




    </>
  )
}
