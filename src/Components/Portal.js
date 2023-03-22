import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from './Nav'



function Portal() {
    return (
        <div>
            <div id="wrapper">
               
                <div id="content-wrapper" class="d-flex flex-column">
                    <Nav/>
                    <div class="container-fluid">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Portal