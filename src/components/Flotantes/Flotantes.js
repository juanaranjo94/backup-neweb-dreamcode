import React from 'react';
import './flotantes.css';
import { URL_WHATSAPP } from './../../assets/Constants'

function Flotantes() {

    return (            
        <div className="redesSociales">
            <nav >
                <ul className="social_icon list-inline social-list row m-0 justify-content-center">
                    <li className="social_iconos "><a href="https://www.facebook.com/dreamcodesoft"><i className="ti-facebook"></i></a></li>
                    <li className="social_iconos "><a href="https://www.linkedin.com/company/dreamcode-software/"><i className="ti-linkedin"></i></a></li>
                    <li className="social_iconos "><a href="https://www.instagram.com/dreamcode_software/"><i className="ti-instagram"></i></a></li>
                    <li className="social_iconos "><a href="https://www.youtube.com/channel/UC2cXutvW1QF4q9NhFHiUZPg"><i className="ti-youtube"></i></a></li>
                    {/* <li className="social_iconos "><a className="btn_wsp" href="https://api.whatsapp.com/send?phone=+573152206211&text=Hola%20Bienvenid@%20a%20DreamCode,%20nos%20alegra%20que%20nos%20hayas%20contactado,%20cu%C3%A9ntanos,%20%C2%BFQu%C3%A9%20idea%20quieres%20que%20hagamos%20realidad?"><i className="fab fa-whatsapp"></i></a></li> */}
                    <li className="social_iconos "><a className="btn_wsp" href={URL_WHATSAPP}><i className="fab fa-whatsapp"></i></a></li>
                </ul>    
            </nav>
        </div>
    );
}

export default Flotantes;