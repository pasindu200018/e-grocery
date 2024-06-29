import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);

  const getAllProduct = async () => {
    const res = await axios.get("http://localhost:3000/api/product/getall");
    console.log(res.data);
    setData(res.data.products);
  };

  const addToCart = async (id) => {
    const data = {userId:user, productId:id, quantity:1}
    const res = await axios.post(`http://localhost:3000/api/cart/create`,
      data);
    console.log(res.data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-1 ">
      <h1 className="md:text-3xl text-xl font-semibold  text-center mt-20  my-5 opacity-65">
        Cart
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {(data || []).map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-2 md:p-5 drop-shadow-xl">
          <img
            src={item.image_url}
            className="object-cover md:rounded-2xl rounded-lg"
            alt=""
          />
          <div className="w-full justify-between flex">
            <div>
              <p className="md:text-[20px] my-2 font-bold">{item.name}</p>
              <p className="md:text-[20px] font-semibold">Rs <span>{item.price}</span></p>
            </div>
            <div>
             
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
