import React, {Component} from 'react';


class ServiceItems extends Component {


    render(){

        let { styleColor ,divStyle, TitleServ, DescrServ, image } = this.props;

    return(
        <div className={`services-items mx_20 ${styleColor}`}>           
            <div className={`row ${divStyle} align-items-center services_content`}>
                <div className="col-sm-12 col-md-8 col-lg-8 d-flex align-items-center">
                    <div className="content-item">
                        <h2 className="f_600 f_size_40">{TitleServ}</h2>
                        <p className="f_p f_500 w_color">{DescrServ}</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <figure className="w-100 d-flex justify-content-center">
                        <img className='img-fluid' src={require ("../../../img/services/" + image)} alt={`${TitleServ}`} />
                    </figure>
                </div>
            </div>         
        </div>


        )
    }
}

export default ServiceItems;