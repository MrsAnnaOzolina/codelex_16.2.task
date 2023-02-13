import axios from "axios";

type Posts ={ 
    id:number,
    image: string,
    title:string,
    blogContent:string
   }
   
 function AxiosFunctionEditPost( {id ,title, blogContent, image}:{
  id:number,
  image: string,
  title:string,
  blogContent:string
 }) {
   return axios.put<Posts>(`http://localhost:3004/posts/${id}`,{
    title,
    blogContent,
    image
 })
    .then(res => res.data)
}

    
export default AxiosFunctionEditPost;