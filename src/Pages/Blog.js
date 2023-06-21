import React from "react";
import './../components/Blog/blog.css'
import Markdown from "react-markdown"
import postlistEn from './../assets/posts/postsEn.json';
import postlistEs from './../assets/posts/postsEs.json';
import { useTranslation } from 'react-i18next';
import {  NavLink } from 'react-router-i18n';
import { BrowserRouter as Router, Switch, Route,  Redirect,  useParams,  useRouteMatch } from "react-router-dom";
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import PostList from '../components/Blog/PostList/PostList';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';
import BannerBlog from "../components/Blog/Banner/BannerBlog";


function Blog () {

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("blog");

    let { path } = useRouteMatch();
    const { t } = useTranslation();


  
    return (
          <>

          <Switch>
            <Route exact path={path}>
              <>
                <MetaDecorator  title={t("meta_datos.meta_title_Jobs")}
                    description={t("meta_datos.meta_description_Jobs")}
                    url="blog" />
                <BannerBlog />
                <PostList />
              </>
            </Route>
            <Route exact path={`${path}/:postId`} component={props => <Post {...props}/>} />
            <Redirect exact from={`/:postId`} to={`${path}/:postId`}  />

            {/* <Route path={`${path}/:postId`}>
              <Post />
            </Route> */}
            
            
          </Switch>
        </>
    );
  }
  
  function Post(props) {

    let postId = props.match.params.postId;
    const { i18n } = useTranslation();

    
    // Verificación del articulo
    const fetchedPost = {}
    let postExists = false;
    let postlist = null;
    let language = i18n.language;

    language === 'en' ? postlist = postlistEn : postlist = postlistEs

    postlist.forEach((post, i) => {
      if (postId === post.url) {
          fetchedPost.title = post.title ? post.title : "No title given"
          fetchedPost.metaTitle = post.metaTitle ? post.metaTitle : "No metaTitle given"
          fetchedPost.meta_description = post.meta_description ? post.meta_description : "No meta_description given"
          fetchedPost.date = post.date ? post.date : "No date given"
          fetchedPost.read = post.read ? post.read : "No read given"
          fetchedPost.url = post.url ? post.url : "No url given"
          fetchedPost.imglink = post.imglink ? post.imglink : "No imglink given"
          fetchedPost.category = post.category ? post.category : "No category given"
          fetchedPost.content = post.content ? post.content : "No content given"
          postExists = true
      }   
    })

        // Configuración de Google Analytics
        ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
        ReactGA.pageview (`${fetchedPost.url}`);


    if (postExists === false) {
        return <Redirect to="/404" />
    }
  

    return (
      <> 
        <MetaDecorator 
          title={fetchedPost.metaTitle}
          description={fetchedPost.meta_description}
          type='article'
          url={fetchedPost.url} />
        <section className="post_area">
            <figure className="post-img">
                <img className="img-fluid" src={require(`../img/posts/${fetchedPost.imglink}`)} alt={fetchedPost.title} title={fetchedPost.title}/>
            </figure>

            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-12"></div>
                    <div className="col-lg-8 blog_sidebar_left">
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="f_p f_size_15 breadcrumb-item"><NavLink to={`/blog`}>Dreamblog</NavLink></li>
                                    <li className="f_p f_size_15 breadcrumb-item active" aria-current="page">{fetchedPost.title}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="blog_single mb_50">
                            <div className="post_content">
                                <h1 className="f_p f_size_40 f_600 t_color mt-3">{fetchedPost.title}</h1>
                                <div className="entry_post_info mb-2 text-capitalize">
                                    <code>{fetchedPost.date}</code>
                                    <code>{fetchedPost.read}</code>
                                    <code>{fetchedPost.category}</code>                                                        
                                </div>
                                <div className="mt-4 f_p">  
                                    <Markdown children={fetchedPost.content}  skipHtml={false} />
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }

export default Blog;