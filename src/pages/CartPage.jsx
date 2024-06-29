import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);

  const getAllCart = async () => {
    const res = await axios.post(
      `http://localhost:3000/api/cart/get-all/${user._id}`
    );
    console.log(res.data);
    setData(res.data.carts);
  };



  const Allpayment = async () => {
    const res = await axios.post(`http://localhost:3000/api/cart/payment/${user._id}`);
    if(res.data.success) {
      getAllCart();
      toast.success("Payment Successfull");
    }
  };
  

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-1 ">

      <h1 className="md:text-3xl text-xl font-semibold  text-center mt-20  my-5 opacity-65">
        Cart
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {(data || []).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-2 md:p-5 drop-shadow-xl"
          >
            <img
              src={item.image_url}
              className="object-cover md:rounded-2xl rounded-lg"
              alt=""
            />
            <div className="w-full justify-between flex">
              <div>
                <p className="md:text-[20px] my-2 font-bold">
                  {item.productId.name}
                </p>
                <p className="md:text-[20px] font-semibold">
                  Rs <span>{item.productId.price}</span>
                </p>
                <p className="md:text-[20px] font-semibold">
                  QTY <span>{item.quantity}</span>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      {data.length > 0 ? (  
      <div className="w-full flex justify-center my-10">
      <button onClick={Allpayment} className="bg-primary  text-white mx-auto h-[50px] rounded-lg   font-semibold text-[24px] w-[200px]">Payment</button>
      </div>
      ): (<h1 className="text-center text-[20px] mt-10">No Cart Item</h1>)}
      <Link to="/order">
      <div className="flex justify-center">

        <button className="bg-gray-900  text-white mx-auto h-[50px] rounded-lg   font-semibold text-[24px] w-[200px]">Your Order</button>
      </div>
      </Link>
    </div>
  );
};

export default CartPage;
