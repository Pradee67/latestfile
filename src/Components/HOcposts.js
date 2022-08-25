import React from 'react'
import axios from 'axios';
const HOcposts= OriginalComponent =>{
    class NewComponent extends React.Component{
       
        constructor(props) {
          super(props)
        
          this.state = {
             posts:[]
          }
        }

    
   componentDidMount=()=>{
        axios.get("https://localhost:44351/api/Products")
        .then((response)=>{
            this.setState({
                posts:response.data
            })
        })
    }
   /* useEffect(() => {
        // document.title = 'My App'
        axios.get("https://localhost:44351/api/Products")
        .then((response)=>{
            this.setState({
                posts:response.data
            })
        })

    }, [])*/
 render(){
    return <OriginalComponent posts={this.state.posts}></OriginalComponent>
    
 }
}
    return  NewComponent
   /* return (
        <>
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
            
        </>
    )*/
}


export default HOcposts