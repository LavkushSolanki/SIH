import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [type, setType] = useState("");
  function currentType(event) {
    console.log(event.target.value);
    setType(event.target.value);
  }

  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col w-screen h-screen pt-10 md:h-full md:w-[400px] items-center gap-6 bg-[rgb(245,245,245)] p-7">
        <div className="flex flex-col items-center">
          <img
            className="h-28 w-28 rounded-full"
            // src="https://th.bing.com/th/id/R.61c18f645044601297cfbbd2a19d14f3?rik=vKM9uAYcI8nVXA&riu=http%3a%2f%2fimages.provenexpert.com%2f41%2f13%2f794e081f80cf37aeaa36482b5678%2facadmedia_full_1690216261.jpg&ehk=%2fgpUA8EfPDjKISnBlSBeV%2fdQcNAYG2U3dqOEmSGGjkQ%3d&risl=&pid=ImgRaw&r=0"
            src="./src/assets/image/logo.jpg"
          />
          <h1 className="text-[#FF8C00] font-bold text-5xl">SAMPARK</h1>
        </div>
        <div>
          <h1 className="text-[#333333] font-bold text-2xl">Login</h1>
          <div className="h-1 w-16 bg-[#333333] rounded-lg"></div>
        </div>

        <form className="flex flex-col gap-3">
          <input
            defaultValue={"Rahul"}
            type="text"
            name="id"
            placeholder="User Id"
            required
            className="p-2 px-3 w-[300px] rounded-lg font-semibold"
          />
          <input
            defaultValue={"1234"}
            type="password"
            name="password"
            required
            placeholder="Password"
            className="p-2 w-full rounded-lg font-semibold px-3"
          />
          <select
            name="type"
            className="p-2 px-3 w-full rounded-lg font-semibold text-slate-400"
            required
            onChange={currentType}
          >
            <option className="font-semibold">Select Category</option>
            <option className="font-semibold" value="alumni">
              Alumni
            </option>
            <option className="font-semibold" value="student">
              Student
            </option>
            <option className="font-semibold" value="college">
              College
            </option>
          </select>
          <Link to={`/${type}`}>
            <input
              type="submit"
              value="Login"
              className="p-2 my-3 w-full rounded-lg bg-[#FFC107] text-white font-bold text-xl"
            />
          </Link>
        </form>
        <div className="flex gap-1 items-center">
          <div className="bg-slate-400 w-20 h-[2px]"></div>
          <p className="text-md font-medium text-slate-700">Or</p>
          <div className="bg-slate-400 w-20 h-[2px]"></div>
        </div>
        <Link to="/register">
          <button className="bg-[#FFC107] text-white font-bold text-xl p-2 rounded-lg w-[300px]">
            Register as Alumni
          </button>
        </Link>
      </div>
    </div>
  );
}
