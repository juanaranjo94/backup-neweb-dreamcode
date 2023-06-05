import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import Markdown from "react-markdown"
import { useTranslation } from 'react-i18next';
import postlistEn from "../../../assets/post/postsEn.json"
import postlistEs from "../../../assets/post/postsEs.json"
import "./sliderBlog.css"

function SliderBlogHome () {

    const { t , i18n} = useTranslation();
    let lng = i18n.language;
    let postlist = null;

    lng === 'en' ? postlist = postlistEn : postlist = postlistEs
   

    postlist.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime())

        const excerptList = postlist.map(post => {
            return post.content.split(" ").slice(0, 18).join(" ") + "..."            
        })


        return(
            <section className="blog_home_area bg-light">
                <Swiper 
                    autoplay={{ delay: 50000, 
                    disableOnInteraction: false,}}
                    modules={[Autoplay]}
                    className="swiper-blog-home" >
                        
                        { 
                            postlist.slice(0, 10).map((post, i) => {
                                return (
                                    <SwiperSlide className="blog_item text-center left" key={i}>
                                        <div className="row m-0">
                                            <div className="col-lg-7 p-0">
                                                <img className="img-fluid w-100" src={require(`../../../img/posts/${post.imglink}`)} alt={post.title}/>
                                            </div>
                                            <div className="col-lg-5 p-0 contentBlog">
                                                <div className="text-left contentBlogItem">
                                                    <div className="feedback f_p">
                                                        <a href={`/${post.url}`}>
                                                            <h2 className="text-uppercase f_p f_size_25 f_600 w_color mb_20">{post.title}</h2>
                                                        </a>
                                                        <Markdown children={excerptList[i]} skipHtml={false} className="post-text f_size_18"/>
                                                        <a href={`/${post.url}`} className="f_size_18 f_600 w_color learn_btn">{t('components.read_more')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>    
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </section>
        )
   }

export default SliderBlogHome;