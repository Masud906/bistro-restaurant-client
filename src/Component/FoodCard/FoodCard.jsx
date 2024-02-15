import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCard from "../../hooks/useCard";
//import axios from "axios";



const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const asiosSecure = useAxiosSecure();
    const [, refetch] = useCard();

    const handleAddToCard = () => {
      if(user && user.email) {
        //send cart item to the database
         const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
         }
         asiosSecure.post('/carts', cartItem)
         .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //regatch to the card
            refetch()
          }
         })
      }
      else {
        Swal.fire({
          title: "you are not Loggin in?",
          text: "Please login",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           //send the user ot the login page
           navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    console.log(item);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button 
          onClick={handleAddToCard}
          className="btn btn-outline btn-accent">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;