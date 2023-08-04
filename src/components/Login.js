import React,{useEffect, useState} from 'react'
import {GoogleLogin ,GoogleLogout} from 'react-google-login'
import {gapi} from 'gapi-script'
import { useDispatch } from 'react-redux'
import { userLogin ,userLogout} from '../store/actions/user-actions'



const Login = () => {
  const clientId = '209005804707-5fj4gs5mpuchhi2vbif9sbnbkeea0evb.apps.googleusercontent.com';
  const dispatch = useDispatch()

  const [user,setUser] = useState(false);
  const [img,setimg] = useState()
  const [name,setName] = useState()
  
     useEffect(() => {
        gapi.load("client:auth2",() => {
            gapi.auth2.init({clientId:clientId})

        })
       },[])
    const handleLoginSuccess = (response) => {
      // Handle the successful login here.
      setimg(response.profileObj.imageUrl)
      setName(response.profileObj.name)
       
      console.log('Logged in successfully!', response.profileObj);
      setUser(true)
      dispatch(userLogin(response.profileObj))
    };
    const handleLoginFailure = (error) => {
      // Handle the login failure here.
      console.error('Login failed:', error);
      dispatch(userLogin(error))
    };
    const handleLogoutSuccess = () => {
      console.log('Logout successful');
      // Perform any additional actions upon successful logout
      setUser(false)
      dispatch(userLogout())
    };
  
    const handleLogoutFailure = (error) => {
      console.error('Logout failed:', error);
      // Handle the error in case the logout fails
    };
  return (
    <div>
    {user ? (
      <div className='sign'> 
        <div className='sign-info'>  
         
        <img src={img} alt={name}/>
        <h3>Welcome {name}</h3>
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={handleLogoutSuccess}
        onFailure={handleLogoutFailure}
      />
        </div>
        </div>
      ) 
      : (
        <div className='sign'> 
            <div className='sign-google'>
                <h2>Join Today</h2>
                 <h3>Sign in with GoogleSign </h3>
            <GoogleLogin
               clientId= {clientId}
               buttonText="Signin with Google"
               onSuccess={handleLoginSuccess}
               onFailure={handleLoginFailure}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
               className='ggg'
          />
            
            </div>
          
        </div>
      )}
    

    </div>
   
  )
}

export default Login