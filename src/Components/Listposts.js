import React,{Component} from 'react';
import HOcposts from './HOcposts';

    class Listposts extends Component{
        render(){
            const posts=this.props.posts
            const displayposts=posts.map((post)=>{
return <ul>
    <li>{post.pid}</li>
    <ul>
    <li>{post.pname}</li>
    <li>{post.company}</li>
    </ul>
</ul>            })
            return(
                <div>
                   
                    {displayposts}
                </div>
            );
        }

    }
    

export default HOcposts(Listposts);