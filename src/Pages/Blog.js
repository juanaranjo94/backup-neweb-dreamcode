import React from 'react';
import postlistEn from './../post/posts.json';
import postlistEs from './../post/postsEs.json';
import { Link } from 'react-router-i18n';
import { useTranslation } from 'react-i18next';


function Blog() {

    const { t } = useTranslation();
    let lg = t('locale');
    let postlist = null;

    if (lg === 'en'){
        postlist = postlistEn
    } else {
        postlist = postlistEs
    } 
    

  return (
           
    <div className="App">
        <header className="App-header">
        <h1>Blog</h1>
        <div>
            <ul>
                {
                    postlist.map((post) => {
                        return(
                            <li><Link to={`/post/${post.url}`}>{post.title}</Link></li>
                        )
                    })
                } 

            </ul>
        </div>
        </header>
    </div>

  ) 
}

export default Blog