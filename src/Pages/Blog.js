import React from 'react';
import { useTranslation } from 'react-i18next';
import Flip from 'react-reveal/Flip';
import '../component/Blog/blog.css'
import PostList from '../component/Blog/PostList/PostList';



function Blog() {

  return (
           
    <div className="blog">
        <section className={`d-flex align-items-center banner_blog`} id="blog">
            <div className="container">             
                <div className="row ">
                    <div className="col-md-12 text-center seo_banner_content">
                        <Flip left>
                            <h1 className="mb-5 f_size_90 w_color f_700">DreamBlog</h1>        
                        </Flip>
                    </div>
                </div>
            </div>
        </section>
        <section className='post-list sec_area'>
            <div className="container">
                <div className='mb-5'>
                    <h2 className='t_color f_size_40 f_600'>Stay Future</h2>
                    <p className='p_color f_size_20 f_500'>Value content of today and development of tomorrow</p>
                </div>
                {/* <Breadcrumbs /> */}
                <div className="row">
                    <PostList />
                </div>
            </div>

        </section>

    </div>

  ) 
}

export default Blog