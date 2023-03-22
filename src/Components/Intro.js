import React from 'react'
import { Link } from 'react-router-dom'
import "./Intro.css"


function Intro() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'id='left'>
                    <img src='https://thumbs.dreamstime.com/b/italian-pizza-white-background-isolated-italian-pizza-white-background-146709376.jpg' />
                </div>



                <div className='col-lg-6' id='rigth'>
                    <h1>welcome to Hotify </h1>
                    <br></br>
                    
                    <h4 id='as'>Are Hungry Don't ware </h4>
                   <Link to={'./portal/order'} ><button className='btn btn-danger'>Order Now</button>
                   </Link>

                </div>
            </div>
        </div>
    )
}

export default Intro