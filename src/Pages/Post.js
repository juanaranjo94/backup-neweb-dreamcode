import React from 'react';
import Markdown from "react-markdown"
import postlistEn from './../post/posts.json';
import postlistEs from './../post/postsEs.json';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

  function PostCopy(props) {

    
    let validId = props.match.params.postId;
    const { t } = useTranslation();
    const fetchedPost = {}
    let postExists = false

    let lg = t('locale');
    let postlist = null;

    if (lg === 'en'){
        postlist = postlistEn
    } else {
        postlist = postlistEs
    } 


    postlist.forEach((post, i) => {
        if (validId === post.url) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.metaTitle = post.metaTitle ? post.metaTitle : "No metaTitle given"
            fetchedPost.metaDescription = post.metaDescription ? post.metaDescription : "No metaDescription given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.read = post.read ? post.read : "No read given"
            fetchedPost.url = post.url ? post.url : "No url given"
            fetchedPost.imglink = post.imglink ? post.imglink : "No imglink given"
            fetchedPost.category = post.category ? post.category : "No category given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
            
        }   
        
    })

    if (postExists === false) {
        return <Redirect to="/blog" />
    }
    
        return (
            <section className="post_area">
                <div className="post-img">
                    <img className="img-fluid" src={require(`../img/${fetchedPost.imglink}`)} alt={fetchedPost.title} title={fetchedPost.title}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12"></div>
                        <div className="col-lg-8 blog_sidebar_left">
                            <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="f_p f_size_15 breadcrumb-item"><a href="/blog">Dreamblog</a></li>
                                    <li className="f_p f_size_15 breadcrumb-item"><a href="/category">Category</a></li>
                                    <li className="f_p f_size_15 breadcrumb-item text-capitalize"><a href={"/category/"+ fetchedPost.category}>{fetchedPost.category}</a></li>
                                    <li className="f_p f_size_15 breadcrumb-item active" aria-current="page">{fetchedPost.title}</li>
                                </ol>
                            </nav>
                            </div>
                            <div className="blog_single mb_50">
                            
                                <div className="blog_content">
                                    <h1 className="f_p f_size_40 f_600 t_color mt-3">{fetchedPost.title}</h1>
                                    <p>{fetchedPost.date} - Read {fetchedPost.read} </p>
                                    
                                    <div className="mt-4 f_p">  
                                        <Markdown children={fetchedPost.content}  skipHtml={false} />
                                    </div> 
                                    <div className="post_tag d-flex">
                                        <a href={`/category/${fetchedPost.category}`}>
                                            <p className='text-capitalize'>{fetchedPost.category}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default PostCopy;




