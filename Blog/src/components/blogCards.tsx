import { useQuery, useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import { useState, useRef, HtmlHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import AxiosFunction from "./axiosFunction"
import { Link } from "react-router-dom";
import './home.css'
import AxiosFunctionCreatePost from "./axiosFunction3"
import axios from "axios";


type Posts = {
  id: number,
  image: string,
  title: string,
  blogContent: string
}

const  Values = {
  title: "",
  blogContent: "",
}

function BlogCards() {
  const [showInput, setShowInput] = useState(false);
const [post, setPost]= useState(Values);
const [myfile, setFile] = useState();
 const [fileName, setFileName] = useState(" ")

  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery<Posts[]>({
    queryKey: ["posts"],
    queryFn: AxiosFunction
  })

  // const createPostMutation = useMutation({
  //   mutationFn: AxiosFunctionCreatePost,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["posts"])
  //   },
  // })

  const  handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formatedData = new FormData();
    formatedData.append("file", myfile );
    formatedData.append("image", fileName);
    formatedData.append("title", post.title);
    formatedData.append("blogContent", post.blogContent);
    
  
     await axios.post("http://localhost:3004/posts",formatedData)
     .then(res => console.log(res))
     .catch(err => console.log(err));
      // createPostMutation.mutate(formatedData) 
    //  setPost(Values);
     
    setShowInput(false);
   
  }
  
  const handleChange = (e:any) => {
      setPost(prev => ({...prev, [e.target.name]: e.target.value})); 
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError || !data) {
    return <div>Error!</div>
  }

  return (
    <div id="blog">
      <div className="blog__addPostButton" >
        <button
          className="waves-effect waves-light btn-large"
          onClick={() => setShowInput(true)}
        >Add new post
        </button>
      </div>
      <div className='blog_addPost' style={showInput ? { display: "block" }: undefined}>
        <form
          onSubmit={handleSubmit}
          // disabled={}
        >
          <h3>Add New Post</h3>
          <input
            type='text'
            placeholder='Title'
            name="title"
            onChange={handleChange}
            maxLength={20!}
            required
            value={post.title}
          />
          <input
            type='text'
            placeholder='blogContent'
            name="blogContent"
            onChange={handleChange}
            value={post.blogContent}
            required
          />
           <input
            type="file"
            name="file"
            onChange={event => {
              const newfile =  event.target.files[0]; 
              setFile(newfile);
              setFileName(newfile.name);   
              // console.log(newfile);
              // console.log(newfile.name)
            }}
            // accept=".jpg, .jpeg, .png"
            // value={post.filename}
            // required
          />
        <br></br>
          <button
            className='waves-effect waves-light btn buttonGap'
          >
            Add
          </button>
        </form>
      </div>
      <div className="blog">
        {data.map(posts => {
          return <div key={posts.id} className="blog__cards" >
            <div className="blog__imageDiv"> 
              <img src={posts.image} className="blog__image" />
            </div>
            <div>
              <h1 style={{ backgroundImage: `${posts.image}` }}>{posts.title}</h1>
              <p>{posts.blogContent.substr(0, 40)}...</p>
              <Link to={`/blog/${posts.id}`} >
                <button className="waves-effect waves-light btn-small" >Read more</button>
              </Link>
            </div>
          </div>
        })
        }
      </div>
      <div></div>
    </div>
  )
}

export default BlogCards;




