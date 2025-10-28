import { all_Products } from '@/JSONDataStore/productData'
import React from 'react'

export default function product({params}) {


    const {id} = params

    
    const product = all_Products.find((p) => p.id.toString() === id)
    

    console.log(product);
    




  return (
    <div>product</div>
  )
}
