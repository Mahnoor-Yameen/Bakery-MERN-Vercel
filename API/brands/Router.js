const express=require('express')
const router=express.Router()


const {CreateBrand,AllBrands, BrandByName, BrandByID, UpdateBrand, DeleteBrand} =require('./Controller')

router.post('/create-brand',CreateBrand)
router.get('/get-brand-by-name',BrandByName)
router.get('/get-all-brands',AllBrands)
router.get('/get-brand-by-id',BrandByID)
router.put('/update-brand',UpdateBrand)
router.delete('/delete-brand',DeleteBrand)

module.exports=router