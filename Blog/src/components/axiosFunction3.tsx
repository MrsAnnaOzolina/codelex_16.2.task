import axios from "axios";

type Posts ={ 
    id:number,
    image: string,
    title:string,
    blogContent:string
    file:undefined
   }
   
 const AxiosFunctionCreatePost =  async ( {title, blogContent, image,file} :{
  image: string,
  title:string,
  blogContent:string,
  file:undefined
 }) => {
     await axios.post<Posts>("http://localhost:3004/posts",{
    title,
    blogContent,
    image,
 })
    // .then(res => res.data)
    .then(res => console.log(res))
}

    
export default AxiosFunctionCreatePost;