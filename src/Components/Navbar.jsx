import React, {useState} from 'react'
import '../Components/navbar.css'
import logo from '../image/logo.png'
import cart_icon from '../image/cart_icon.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user , loginWithRedirect , isAuthenticated , logout} = useAuth0();
    console.log("Current User",user);
    const [menu,setMenu] = useState("shop");
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>E-Com Web</p>
            </div>
            <div className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("products")}}><Link to='/Products'>Products</Link>{menu==="products"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link to='/About'>About_us</Link>{menu==="about"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("faq")}}><Link to='/Faq'>Faq</Link>{menu==="faq"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("terms")}}><Link to='/Terms'>Terms & Con.</Link>{menu==="terms"?<hr />:<></>}</li>
            </div>
            <div className='login-cart'>
                
                {
                    isAuthenticated ? (
                    <button  className='log-btn' onClick={(e) => logout(e)}>{ isAuthenticated && <h3>{user.nickname}</h3>}</button> 
                )
                    :
                     <button className='log-btn' onClick={(e) => loginWithRedirect(e)}>Log In</button>
                }<Link to='/Cart'>
                <img src={cart_icon} alt='' /></Link>
            </div>
        </div>
    )
}
export default Navbar;