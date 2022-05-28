import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user]= useAuthState(auth);
    // console.log(user)
    const handleSignOut = () =>{
        signOut(auth);
    }
    
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allProducts">Product</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li> 
        {user && <li><Link to="/dashboard/myProfile">Dashboard</Link></li> }
         {
                        user?.displayName ? <div className='user-area' style={{display:'inline-block'}}>
                            <img style={{width:'35px',borderRadius:'50%',display:'inline-block'}} src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" /> 
                            <button className='border-2 border-black rounded-lg inline-block' onClick={handleSignOut}>Log Out</button>
                        </div> : <li> <Link as={Link} to="login">Log in</Link></li>
                    }
    </>
    return (
            <div className="navbar bg-primary font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                        <img style={{width:100}} src="https://i.ibb.co/HzpCshd/dewalt.png" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
    );
};


export default Navbar;