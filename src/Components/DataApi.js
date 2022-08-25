
	
import axios from 'axios'
import React , {useEffect ,useState} from 'react'

const DataApi = () => {
    const [post,setPost]=useState({})
    const [pid,setProductId]=useState(1)
    const [productIdfrombutton,setProductIdfrombutton] = useState(1)

    const clickHandler = () =>{
      setProductIdfrombutton(pid)
    }

    useEffect(()=>{
      axios.get(`"https://localhost:44351/api/Products/${productIdfrombutton}`)
      .then(res =>{
        console.log(res)
        setPost(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
        

    },[productIdfrombutton])

  return (
    <div>
    <input type="text" value={pid} onChange={e => setProductId(e.target.value)}></input>
    <button type="button" onClick={clickHandler}> apidata</button> 
    <div>PRODUCT NAME: {post.pname} <br /> Company: {post.company}  <br />  Price: {post.price}  </div>
        
       
      
        { /*  <ul>
          posts.map(post => (
            <li key={post.productId}  >
       <ul>{post.productId}</ul>
        {post.productname}
        {post.availablecount}
        {post.price}
        </li>
      
          ))
          
          </ul>  */ }
        
     
        
    </div>
  )
}


export default DataApi