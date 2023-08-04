import React  from 'react'
import { Link } from 'react-router-dom'
import {MdStore} from 'react-icons/md'
import {FaShoppingBag} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {BiLogIn} from "react-icons/bi"


const Slidebar = () => {

  const product = useSelector(state => state.bagReducer)
  const locationvalid = useLocation()
  const profile = useSelector(state => state.profileReducer)
  if (profile.user.name) {
    console.log("yes")
    console.log(profile.user);
  }else (
    console.log("non")
  )


  return (
    <section className='sidebar'>
      <Link to='/' >
        <div className='logo' >
          KR
        </div>
      </Link>
      {profile.user.name ? (
        <Link to='/login'>
      <div className={`marcket ${locationvalid.pathname === '/login' ? 'active active-login' : ''} ` } style={{background: "white"}}  >
             <img style={{width: "24px", borderRadius: "50%"}} src={profile.user.imageUrl} alt='login' />
      </div>
      </Link>
      ): (<Link to='/login'>
      <div className={`marcket ${locationvalid.pathname === '/login' ? 'active' : ''} `} >
             <BiLogIn size="24px"/>
      </div>
      </Link>)}

      


      <Link to='/'>
        <div className={`marcket ${locationvalid.pathname === '/' ? 'active' : ''} `} >
          <MdStore size="24px" />
          </div>
      </Link>
      <Link to='/bag'>
        <div className={`bag ${locationvalid.pathname === '/bag' ? 'active' : ''} `}  >
          <FaShoppingBag size="22px"/>
          <div className='notification-bag'>{product.bagItems.length}</div>
        </div>
      </Link>
    </section>
   
  )
}

export default Slidebar