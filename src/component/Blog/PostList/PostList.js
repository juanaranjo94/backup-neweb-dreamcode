import React from 'react';
import './postList.css'
import enPost from './../../../assets/post/postsEn.json';
import esPost from './../../../assets/post/postsEs.json';
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

    //Ordena la lista por la fecha mas reciente 
    postList.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime());
    

  return (
        <>
            {
                postList.map((post, i) => {
                    return(
                        <div className='col-lg-6 col-sm-12 col-md-6' key={i}>
                            <div className="">
                                <img className="img-fluid" src={require(`../../../img/posts/${post.imglink}`)} alt={post.title} title={post.title}/>
                            </div>
                            <div className="blog_content t_color position-relative py-4">
                                <h2 className="f_p f_size_30 f_600 t_color ">
                                    <Link to={`/post/${post.url}`}>{post.title}</Link>
                                </h2>
                                <div className="entry_post_info mb-2 text-capitalize">
                                    <code>{post.date}</code>
                                    <code>{post.read}</code>
                                    <code>{post.category}</code>                                                        
                                </div>
                                <Markdown children={excerptList[i]} skipHtml={false} />
                                {/* <div className="post_tag d-flex">
                                    <Link to={`/post/${post.url}`}>
                                        <p className='text-capitalize'>{post.category}</p>
                                    </Link>
                                </div>       */}
                            </div>
                        </div>
                        
                    )
                })
            } 

        </>
  )
}

export default PostList;