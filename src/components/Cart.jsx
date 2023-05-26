import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import "../styles/styles.scss"
import {useDispatch, useSelector} from "react-redux"

const Cart = () => {

const {cartItems,subTotal,tax,shipping,total}=useSelector(state=>state.cart)
const dispatch=useDispatch()
const increment=(id)=>{
   dispatch({
    type:"addToCart",
    payload:{id}
   })
   dispatch({
    type:"calculatePrice"
})

}
const decrement=(id)=>{
    dispatch({
        type:"removeFromCart",
        payload:id
    })
    dispatch({
        type:"calculatePrice"
    })
}
const deleteHandler=(id)=>{
    dispatch({
        type:"delete",
        payload:id
    })
    dispatch({
        type:"calculatePrice"
    })
}
  return (
    <div className='cart'>
    <main>
   {cartItems.length>0?
   (
    cartItems.map(i=>(

        <CartItems
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            qty={i.quantity}
            id={i.id}
            increment={increment}
            decrement={decrement}
            deleteHandler={deleteHandler}
        />

    )

    )
   )
   :
   <h1>No Items in Cart yet</h1>}

    </main>
    <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping Charges:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
    </aside>

    </div>
  )
}

const CartItems=({imgSrc,name,price,qty,increment,decrement,id,deleteHandler})=>(
    <div className='cartitems'>
    <img src={imgSrc} alt={name}/>
    <article>
        <h3>{name}</h3>
        <p>${price}</p>

    </article>

    <div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)
        }>+</button>

        
    </div>
    <AiFillDelete onClick={()=>deleteHandler(id)}></AiFillDelete>


    </div>

)

export default Cart