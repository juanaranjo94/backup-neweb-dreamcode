import React from 'react';
import './postList.css'
import enPost from './../../../assets/posts/postsEn.json';
import esPost from './../../../assets/posts/postsEs.json';
import { Link } from 'react-router-i18n';
import Markdown from "react-markdown"
import { useTranslation } from 'react-i18next';

function PostList() {

    const { i18n } = useTranslation();
    let lng = i18n.language;
    let postList = null;

    lng === 'en' ? postList = enPost : postList = esPost

    

    //Imprime solo las primeras 20 palabras del articulo
    const excerptList = postList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    });

  return (
    <section className='post-list '>
        <div className="container">
            <div className='row'>
                {
                    postList.map((post, i) => {
                        return(
                            <div className='col-lg-6 col-sm-12 col-md-6' key={i}>
                                <div className="">
                                    <img className="img-fluid" src={require(`../../../img/posts/${post.imglink}`)} alt={post.title} title={post.title}/>
                                </div>
                                <div className="post_content t_color position-relative py-4">
                                    <h2 className="f_p f_size_30 f_600 t_color ">
                                        <Link to={`/blog/${post.url}`}>{post.title}</Link>
                                    </h2>
                                    <div className="entry_post_info mb-2 text-capitalize">
                                        <code>{post.date}</code>
                                        <code>{post.read}</code>
                                        <code>{post.category}</code>                                                        
                                    </div>
                                    <Markdown children={excerptList[i]} skipHtml={false} />
                                </div>
                            </div>
                            
                        )
                    })
                } 
            </div>  
        </div>
    </section>
  )
}

export default PostList;