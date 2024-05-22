import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../App'

export default function Categories() {

  const [Category, setCategory] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-Categories`)
      .then((res) => setCategory(res.data.Categories))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#f9e0b7" }}>

      <h1 className='text-center'>Category </h1>
      <div className="container">
        <div className="row">

          {
            Category.map((value, index) =>
                     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2"  key={index}>

                <Link  to={`/category/${value.CategoryName}`} className='text-decoration-none'>
                    <div className="card" >
                        <img src={value.CategoryImage} className='object-fit-contain border rounded img-fluid' style={{ height: "200px" }}  alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                {value.CategoryName}
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
