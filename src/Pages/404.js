import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-i18n';

function Page404 () {

  const { t } = useTranslation();

  return (

    <div>
      <section className="error_two_area sec_pad min-vh-75">
        <div className="container flex">
          <div className="text-center">
            <h2 className='t_color f_size_60 f_700'>Error 404. We can’t find the page you’re looking for.</h2>
            <p className='p_color f_600 f_size_20'>Sorry for the inconvenience. </p>
            <NavLink to="/" className="learn_btn"> Back to Home Page<i className="ti-arrow-right"></i></NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page404;