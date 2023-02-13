import axios from "axios";

type Comments ={ 
    id:number,
    author: string,
    blogComment:string
    post_id: number
   }
   
async function AxiosFunctionwithIDComments( id:string ) {
    const { data } = await axios.get<Comments[]>(`http://localhost:3004/comments/${id}`)
    return data
}

    
export default AxiosFunctionwithIDComments;