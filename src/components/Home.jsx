import React from 'react'
import ProductCard from './ProductCard.jsx'
import { toast } from 'react-hot-toast';
import "../styles/styles.scss"
import { useDispatch } from 'react-redux';

const Home = () => {


  const productList=[{
    name:"Acer Predator Gaming Laptop",
    price:12000,
    imgSrc:"https://m.media-amazon.com/images/I/81oz+NZ4QLL._SX450_.jpg",
    id:"sndbbsa ms8y837u2jdwnm"
  },
{
  name:"Artic Fox Bagpack",
  price:1600,
  imgSrc:"data:image/jpeg;base64,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",
  id:"jnskjncxx,cmx,xzm,xczmncxzx"
},
{name:"Artic Fox Bagpack",
price:1600,
imgSrc:"data:image/jpeg;base64,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",
id:"jnskjncxx,mx,xzm,xczmncxzx"}]

const dispatch= useDispatch()

const addToCartHandler=(options)=>{
  dispatch({type:"addToCart",payload:options})
  dispatch({
    type:"calculatePrice"
})
  
  toast.success("Product Added to Cart")
  
}

  return (
    <div className='home'>{
      productList.map((i)=>(
        <ProductCard 
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  )
}


export default Home