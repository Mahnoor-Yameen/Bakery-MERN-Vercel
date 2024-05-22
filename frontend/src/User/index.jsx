import React from 'react'


// importing components, pages
import Home from './../Guest/pages/Home'
import Categories from '../Guest/pages/Categories'
import Brands from '../Guest/pages/Brands'
import Products from '../Guest/pages/Products'
import Profile from './pages/Profile'
import Navigationbar from './components/Navigationbar'
import SingleProductDynamic from '../Guest/pages/SingleProductDynamic'
import SingleBrandDynamic from '../Guest/pages/SingleBrandDynamic'
import Checkout from '../Guest/pages/Checkout'
import Page404 from '../Guest/pages/Page404'
import SingleCategoryDynamic from '../Guest/pages/SingleCategoryDynamic'
import OrderFinal from '../Guest/pages/OrderFinal'
import UserOrders from './pages/UserOrders'
import SingleOrder from './pages/SingleOrder'




//import routing 
import {Route,Routes} from 'react-router-dom'


export default function User() {
  return (
    <>
<Navigationbar/>    
<Routes>
     <Route path="/register" element={<Home />} />
     <Route path="/login" element={<Home />} />
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />



     <Route path="/products" element={<Products />} />
     <Route path="/get-product-by-id/:_id" element={<SingleProductDynamic />} />

     <Route path="/brands" element={<Brands />} />
     <Route path="/brands/:BrandName" element={<SingleBrandDynamic />} />

     <Route path="/categories" element={<Categories />} />
     <Route path="/category/:CategoryName" element={<SingleCategoryDynamic />} />



     <Route path="/profile" element={<Profile />} />
     
     <Route path="/Checkout" element={<Checkout />} />
     <Route path="/orderplacement" element={<OrderFinal />} />

     <Route path="/userorders" element={<UserOrders />} />
     <Route path="/userorders/:_id" element={<SingleOrder />} />



     {/* <Route path="*" element={<Page404 />} /> */}


     

</Routes> 




    
    </>
  )
}
