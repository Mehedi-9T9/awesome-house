
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
    const location = useLocation()
    const disableHeaderFooter = location.pathname.includes('login') || location.pathname.includes('rejister')
    return (
        <div>
            {
                disableHeaderFooter || <Navbar></Navbar>
            }

            <Outlet></Outlet>
            {
                disableHeaderFooter || <Footer></Footer>
            }


        </div>
    );
};

export default Root;