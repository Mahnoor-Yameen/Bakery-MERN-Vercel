import React from 'react'
import img2 from '../../images/1.png'

import { AppRoute } from '../../App'
export default function Aboutus() {
    return (
        <>

<div style={{backgroundColor:"#f9e0b7"}}>


        {/* MARQUE SECTION */}
        <hr />
            <section className="marq-section backgroundcolor">
                <marquee className="" behavior="" direction="right" width="100%" id="home">
                    Free Delivery for order above Rs. 2000
                </marquee>
<hr />                
            </section>

            {/* BANNER SECTION */}

            {/* <BannerSection/>    isko comment kiya ku k work achy se nh kr raha */}

            {/* SIR ka HEADER SECTION */}
            
            <div >
                <div className="d-flex justify-content-center align-items-center row">
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <img className='img-fluid rounded-circle'  src={img2} alt=""/>
                    </div>
                    <div className="p-3 container backgroundcolor col-12  col-sm-12 col-md-6 col-lg-6">
                        <h2 >
                        Greetings, new friend of our bakery! Let's treat your taste buds.
                        </h2>
                        <p className="text-secondary rounded">A warm welcome awaits you, new user, as you enter our bakery's online universe. Join us in discovering the realm of mouthwatering treats and culinary wonders.</p>
                    </div>

                </div>
            </div>



            </div>


        </>
    )
}
