import React from 'react'
import Sliter from './Sliter'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import pizzas from "./Pizzadata"
import Pizza from './Pizza';
import { Input } from 'reactstrap';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllPizzas } from '../../Action/PizzaAction';
function Home() {
    const dispatch=useDispatch()
    useEffect(() => {
       dispatch(getAllPizzas())
    },Input)
    return (

        <div className="container" id='123'>
            <Sliter />

            <div>
                <div className='row justify-content-center'>
                    
                    {pizzas.map(pizza => {
                        return <div className='col-lg-3 md-6'>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>


                    })}

                </div>
            </div>
        </div>
    )
}

export default Home