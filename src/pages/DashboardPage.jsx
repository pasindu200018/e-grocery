import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="p-1">
      <h1 className="md:text-3xl justify-center text-xl font-semibold  text-center mt-20  my-5 opacity-65">
        Dashboard
      </h1>
      <div>
        <div className="max-w-xl mx-auto grid  font-roboto items-center ">
          <div className="md:p-20 p-5 ">
            <div className="text-center">
              <p className="text-[20px] font-semibold">
                Add a Product
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[16px]">Product name</p>
              <input
                type="text"
                className="outline-none border text-[16px] bg-white w-full h-[50px] rounded-lg px-3 mt-2"
              />
            </div>
            <div className="mt-10">
              <p className="text-[16px]">Qty</p>
              <input
                className="outline-none border bg-white w-full h-[50px] rounded-lg p-3 mt-2"
                type="number"
              />
            </div>

            <button className="bg-primary mt-5 text-white w-full h-[50px] rounded-lg   font-semibold text-[24px]">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
