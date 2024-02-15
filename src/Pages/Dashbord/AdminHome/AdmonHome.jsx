import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaAd, FaDollarSign, FaUsers } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


const AdmonHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data;
    }
  })
  return (
    <div>
      <h2 className="text-3xl">
        <span className="font-bold">Hi, Welcome </span>
        {
          user?.displayName ? user.displayName : 'Back'
        }


      </h2>
      <div className="stats shadow">

        <div className="stat bg-blue-200">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">$318.00</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat bg-orange-200">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
         {/* <div className="stat-value">{stats.users}</div> */}
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat bg-red-200">
          <div className="stat-figure text-secondary">
            <FiShoppingCart className="text-3xl"></FiShoppingCart>
          </div>
          <div className="stat-title">Menu Items</div>
          {/* <div className="stat-value">{stats.menuItems}</div> */}
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat bg-green-200">
          <div className="stat-figure text-secondary">
            <FaAd className="text-3xl"></FaAd>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">18</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat bg-teal-200">
          <div className="stat-figure text-secondary">
            {/* <FaAd className="text-3xl"></FaAd> */}
          </div>
          {/* <div className="stat-title">Orders</div> */}
          <div className="stat-value">Bistro</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
       

      </div>
      <div>
      <div className="diff aspect-[16/9] mt-11">
  <div className="diff-item-1 ">
    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">Masud</div>
  </div>
  <div className="diff-item-2">
    <div className="bg-orange-200 text-9xl font-black grid place-content-center">Masud</div>
  </div>
  <div className="diff-resizer"></div>
</div>
      </div>
    </div>
  
  );
};

export default AdmonHome;