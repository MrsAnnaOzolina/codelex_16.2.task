import axios from "axios";
type Posts ={ 
    id:number,
    image: string,
    title:string,
    blogContent:string
   }
   
async function AxiosFunction() {
    const { data } = await axios.get<Posts[]>("http://localhost:3004/posts")
    return data
}

export default AxiosFunction;