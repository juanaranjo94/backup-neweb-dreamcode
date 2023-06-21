import React, { Component } from 'react';
import './logoClients.css'

class Clients extends Component {
    render() {

            let {classDiv } = this.props;

        return (
            <div className={`row ${classDiv} `}>
                <div className="col-lg-3 col-6 ">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-target.png')} alt="Logo Client Target"/>
                    </figure>
                </div>                               
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-falabella.png')} alt="Logo Client Falabella"/>
                    </figure>    
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-miraclon.png')} alt="Logo Client Miraclon"/>
                    </figure>
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-bolivar.png')} alt="Logo Client Bolivar"/>
                    </figure>
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-phonecheck.png')} alt="Logo Client Phonecheck"/>
                    </figure>
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-sequoia.png')} alt="Logo Client Sequoia"/>
                    </figure>
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-global-networks.png')} alt="Logo Client Global Networks"/>
                    </figure>
                </div>
                <div className="col-lg-3 col-6">
                    <figure className="imgClients">
                        <img src={require('../../img/clients/logo-square-trade.png')} alt="Logo Client Square Trade"/>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Clients;
