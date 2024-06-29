

const OrderPage = () => {

  // const getAllOrder = async () => {
  //   const res = await axios.get("http://localhost:3000/api/order/getall");
  // }

  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-1 ">
      <h1 className="md:text-3xl text-xl font-semibold  text-center mt-20  my-5 opacity-65">
        Order
      </h1>

      <div>
        <table className="table-auto w-full mt-10">
          <thead>
            <tr className="text-2xl border">
              <th >Product</th>
              <th >Qty</th>
              <th >Status</th>
            </tr>
          </thead>
          <tbody className="text-xl border">
            <tr className="my-3">
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
