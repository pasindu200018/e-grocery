import loginimage from "../assets/login-side-image.jpg";
import loginBg from "../assets/loginbg.jpg";

const RegisterPage = () => {
  return (
    <div className=" w-full  p-1 h-screen md:h-full" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="max-w-7xl  md:mx-auto overflow-hidden my-10 mx-3 rounded-[10px] py-5 bg-white drop-shadow-xl">
        <div className="w-full   grid md:grid-cols-2 font-roboto items-center">
          <div className="md:p-20 p-5">
            <h1 className="font-semibold text-[40px] text-primary">Signup</h1>
            <p className="text-[20px] font-semibold">
              Please Signup to continue
            </p>
            <div className="mt-10">
              <p className="text-[16px]">Username</p>
              <input
                type="text"
                className="outline-none border text-[16px] bg-white w-full h-[50px] rounded-lg px-3 mt-2"
              />
            </div>
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
              Already have an account <span className="text-primary">Log in</span>
            </p>
          </div>

          <div className="w-full h-full hidden md:block">
            <img className="w-full h-full object-cover scale-105" src={loginimage} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
