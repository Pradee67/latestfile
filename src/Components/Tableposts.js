import React,{Component} from 'react';
import HOcposts from './HOcposts';
import '../Styles/HOC.css';

    class Tableposts extends Component{
        render(){
            const posts=this.props.posts
            const displayData=this.props.posts.map((post)=>{
                 return <tr key={post.pid}>
                    
                    <td>{post.pid}</td>
                    <td>{post.pname}</td>
                    <td>{post.company}</td>
                    <td>{post.price}</td>
                </tr>
            })
            return(
                <div>
                    <table>
                        <tbody>
                        <tr>
                      <th>Productid</th>
                    <th>Product name</th>
                    <th>Company</th>
                    <th>Price</th>
                </tr>
                {displayData}
                        </tbody>

                    </table>
                </div>
            );
        }

    }
    

export default HOcposts(Tableposts);
