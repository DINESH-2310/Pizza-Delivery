import React from 'react'
import './Nav.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


function Nav() {
   const cartstate=useSelector(state=>state.cartReducer)
    return (
        <>
        <nav class="navbar navbar-expand-lg shadow p-3 mb-5  rounded ">
  <a class="navbar-brand" id="brand"href="#">🍕 HOTIFY <span>Pizza</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
    <Link class="nav-item" to='/portal/order'>
          <a class="nav-link active" aria-current="page" href="#">order</a>
        </Link>
        <Link class="nav-item" to='/portal/cart'>
          <a class="nav-link active" aria-current="page" href="#">Cart {cartstate.cartItems.length}</a>
        </Link>
    </ul>
  </div>
</nav>
</>
    )
}

export default Nav