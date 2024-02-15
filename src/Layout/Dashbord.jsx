import { NavLink, Outlet } from "react-router-dom";
import { FiList, FiShoppingCart } from "react-icons/fi";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUser,} from "react-icons/fa";
import useCard from "../hooks/useCard";
import useAdmin from "../hooks/useAdmin";


const Dashbord = () => {
    const [cart] = useCard();

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                   {
                    isAdmin ? <>
                     <li>
                        <NavLink to="/dashbord/adminHome">
                            <FaHome />
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/addItems">
                            <FaList />
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/manageItems">
                            <FaBook />
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/booking">
                            <FaUser />
                            Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/users">
                            <FiList />
                            User</NavLink>
                    </li>
                </>
                    :
                    <>
                    <li>
                    <NavLink to="/dashbord/userHome">
                    <FaHome />
                    User Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashbord/reservation">
                    <FaCalendar />
                    Reservation</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashbord/reservation">
                    <FiShoppingCart />
                    My cart ({cart.length})</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashbord/review">
                    <FaAd />
                    Add a review</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashbord/bookings">
                    <FiList />
                    My Bookings</NavLink>
                    </li>
                    </>
                   }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaSearch />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope />
                            contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;