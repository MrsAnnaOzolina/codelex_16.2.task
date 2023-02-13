import axios from "axios";

type Comments ={ 
    id:number,
    author:string
    blogCommnent:string,
    post_id:number
   }
   
 function AxiosFunctionAddComment( {author, blogComment, post_id} :{
  author:string,
  blogComment: string,
  post_id:string
 }) {
   return axios.post<Comments>("http://localhost:3004/comments",{
   author,
   blogComment,
   post_id
    
 })
    .then(res => res.data)
}

    
export default AxiosFunctionAddComment;