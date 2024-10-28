import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <><Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        
        </>
    );
};

export default Root;