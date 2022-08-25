
import React, { useState } from 'react'
import axios from 'axios'
import styles from '../Styles/login.module.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';


const Register = () => {
    const navigate=useNavigate('')
    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const [errmsg,seterrmsg]=useState('')
    const [errusername,seterrusername]=useState('')
    const [erremail,seterremail]=useState('')
    const [errpassword,seterrpassword]=useState('')
    const auth=useAuth()
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(username.trim()===''){
        seterrusername('please enter a username')}
        else if(email===''){
            seterremail('please enter a email')}
        else if(password===''){
        seterrpassword('please enter a password')

    }
    else{
        axios.post('https://localhost:44353/api/Login/register',{
            "username":username,   
        "email":email,
    

        "password":password
    })
        .then((res)=>{
            
           localStorage.setItem('token',res.data.token)
           auth.login(username)
           navigate('/')
            })
            .catch((res)=>{
                seterrmsg('Bad Credentials')
                auth.user=null
        })
    }
}
    
    const changeusername=(e)=>{
        setusername(e.target.value)
        seterrusername('')
        seterrmsg('')
        
    }
    const changepassword=(e)=>{
        setpassword(e.target.value)
        seterrpassword('')
        seterrmsg('')
    
    }
    const changeemail=(e)=>{
        setemail(e.target.value)
        seterremail('')
        seterrmsg('')
    
    }
    
    
  return (
    <>
    <section>
        <form onSubmit={handlesubmit}>
            <p className={styles.error}>{errmsg}</p>
            <h2>Sign in</h2>
            <div>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={username} onChange={changeusername}></input>
                <p  className={styles.error}>{errusername}</p>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='Password' value={email} onChange={changeemail}></input>
                <p className={styles.error}>{erremail}</p>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' type='Password' value={password} onChange={changepassword}></input>
                <p className={styles.error}>{errpassword}</p>
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
              
        </form>
    </section>
    
    
    </>
  )
  }

export default Register