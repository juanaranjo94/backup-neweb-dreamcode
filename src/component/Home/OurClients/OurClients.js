import React from 'react';
import Clients from '../../LogoClients/LogoClients';
import "./ourClients.css"

function OurClients (){


        return(

            <section className="sec_area bg-white " id="clients">
                <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <Clients classDiv="align-items-center"/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

export default OurClients;