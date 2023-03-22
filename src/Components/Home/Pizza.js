import React from 'react'
import pizzas from './Pizzadata'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../../Action/Cardaction'
import './Home.css'

function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1)
  const [varients, setvarients] = useState("small")

const dispatch=useDispatch()
  function addtocart()
{
  dispatch(addToCart(pizza,quantity,varients))
}
  return (
    <div class="card-group">

      <div class="card"id='cards' style={{width:"250px",height:"450px"}}>
      <h4 class="card-title mt-2">{pizza.name}</h4>
        <img class="img-fluid" src={pizza.image} alt="Card image cap" style={{height:'150px',width:"100px"}}/>
        <h6 class="card-text">{pizza.description}</h6>
    
        <div className='flex-container w-100'>
          <div >
            <h5>Varients </h5><select className='form-control' value={varients} onChange={(e) => { setvarients(e.target.value) }}>
              {pizza.varients.map(varients => {
                return <option value={varients}>{varients}</option>
              })}
            </select>
            </div>

            <div className=''>
              <h5>Quantity</h5>
              <select value={varients} onChange={(e) => { setquantity(e.target.value) }}>{[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>
              })}
              </select>
          </div>
        </div>
        <div className='card-body'>
          <h5>Price:{pizza.prices[0][varients] * quantity}</h5>
          <div className='addtocard'>
            <button onClick={addtocart}><h6 style={{fontSize:"12px"}}>Add To Card</h6></button>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Pizza