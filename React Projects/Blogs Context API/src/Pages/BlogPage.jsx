import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppCotext';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import BlogDetails from '../Components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {

    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}get-blog?blogId=${blogId}`
        // console.log(url)
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } 
        catch (error) {
            alert("Problem in fetching data")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
      if(blogId){
        fetchRelatedBlogs();
      }
    }, [location.pathname])
    

    return (
        <div>
            <Header/>
            <div>
                <button onClick={()=>navigation(-1)}>Back</button>
            </div>
            {
                loading ? 
                    <Loader/> :
                    ( blog ? 
                        (<div>
                            <BlogDetails post={blog}/>
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post) => {
                                    return(
                                        <BlogDetails key={post.id} post={post}/>
                                        
                                    );
                                    
                                })
                            }
                        </div>) : 
                        ( <div>No Blog Found</div> ) )
            }
        </div>
    )
}

export default BlogPage
