import React from 'react';
import {Link,Outlet } from 'react-router-dom'

const Dashboard = () => {
    // const { admin, logOut } = useAuth()
    // // console.log(admin);
    // let { path, url } = useRouteMatch();
    // const history = useHistory()

    // const handleLogOut = () => {
    //     const confirmLogOut = window.confirm('Are you sure you want to log out?')
    //     if (confirmLogOut) {
    //         logOut()
    //         history.replace('/')
    //     }
    // }
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                       <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                       <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
                       <li><Link to={'/dashboard/addReview'}>Add Review</Link></li>
                       <li><Link to={'/dashboard/manageOrders'}>Manage Orders</Link></li>
                       <li><Link to={'/dashboard/manageProducts'}>Manage Products</Link></li>
                       <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                       <li><Link to={'/dashboard/makeAdmin'}>Make Admin</Link></li>
                    </ul>
                    <div className='col-span-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;