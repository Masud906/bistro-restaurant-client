import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCard from "../../../hooks/useCard";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCard();
  console.log(cart);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order">Order Food</Link></li>
    {
      user && isAdmin && <li><Link to="/dashbord/adminHome">Secr</Link></li>

    }
    {
      user && !isAdmin && <li><Link to="/dashbord/userHome">Secret</Link></li>

    }
    <li>
      <Link to="/dashbord/cart">
        <button className="btn">
          Order
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
    </li>
    {
      user ? <>
      <span>{user?.displayName}</span>
        <button onClick={handleLogOut} className="btn btn-warning">LOGOUT</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }
  </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className=" text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;