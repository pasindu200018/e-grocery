import loginimage from "../assets/login-side-image.jpg";
import loginBg from "../assets/loginbg.jpg";
const LoginPage = () => {
  return (
    <div className=" w-full h-screen p-1 " style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="max-w-7xl  mx-auto overflow-hidden mt-10 rounded-[10px] bg-white drop-shadow-xl">
        <div className="w-full   grid grid-cols-2 font-roboto items-center">
          <div className="p-20">
            <h1 className="font-semibold text-[40px] text-primary">Login</h1>
            <p className="text-[20px] font-semibold">
              Please Login to continue
            </p>
            <div className="mt-10">
              <p className="text-[16px]">Email</p>
              <input
                type="text"
                className="outline-none border text-[16px] bg-white w-full h-[50px] rounded-lg px-3 mt-2"
              />
            </div>
            <div className="mt-10">
              <p className="text-[16px]">Password</p>
              <input
                className="outline-none border bg-white w-full h-[50px] rounded-lg p-3 mt-2"
                type="password"
              />
            </div>
            <div className="flex opacity-30 items-center my-5 gap-2">
              <div className="w-[20px] h-[20px] border border-2 rounded-md border-black"></div>
              <p
                className="
            text-[16px] font-semibold"
              >
                Remember me
              </p>
            </div>
            <button className="bg-primary  text-white w-full h-[50px] rounded-lg   font-semibold text-[24px]">
              Login
            </button>
            <p className="text-[16px] mt-3 font-semibold">
              Dont have an account <span className="text-primary">Sign Up</span>
            </p>
          </div>
          <div>
            <img className="w-full object-cover scale-105" src={loginimage} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
