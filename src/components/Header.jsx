import React from 'react'
import "../styles/styles.scss"
import {FiNavigation, FiShoppingBag} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"


const Header = () => {
  return (
   <nav>

  
    <Link to={"/"}> <AiOutlineShoppingCart className='svgg'/></Link>
    <h2>Redux Cart</h2>
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/cart"}>

    <FiShoppingBag/>
    {/* <p>{0}</p> */}
    </Link>
    
    </div>
    
   </nav>
  )
}

export default Header