import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col gap-7 w-screen h-screen justify-center  bg-slate-200 items-center">
      <div className="flex flex-col items-center">
        <img
          className="h-28 w-28 rounded-full"
          src="https://th.bing.com/th/id/R.61c18f645044601297cfbbd2a19d14f3?rik=vKM9uAYcI8nVXA&riu=http%3a%2f%2fimages.provenexpert.com%2f41%2f13%2f794e081f80cf37aeaa36482b5678%2facadmedia_full_1690216261.jpg&ehk=%2fgpUA8EfPDjKISnBlSBeV%2fdQcNAYG2U3dqOEmSGGjkQ%3d&risl=&pid=ImgRaw&r=0"
        />
        <h1 className="text-[#FF8C00] font-bold text-5xl">SAMPARK</h1>
      </div>
      <div>
        <h1 className="text-black text-3xl font-bold">Alumni Registration</h1>
        <div className="h-1 w-72 bg-[#FF8C00] rounded-lg"></div>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-ellipsis">
            Choose your College
          </label>
          <select className="p-1 rounded-lg w-auto">
            <option selected value=""></option>
            <option>GEC Gandhinagar</option>
            <option>Anand College</option>
            <option>Silicon University</option>
            <option>KIIT University</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-ellipsis">
            Choose the program you were enrolled
          </label>
          <select className="p-1 rounded-lg">
            <option selected></option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>PGD</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-ellipsis">
            Choose Year of Passout
          </label>
          <select className="p-1 rounded-lg">
            <option></option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-ellipsis">
            Enter Your College Registeration Number
          </label>
          <input type="text" className="p-1 rounded-lg" />
        </div>
        <Link to="/otp">
          <input
            type="submit"
            value={"Register"}
            className="bg-[#FF8C00] mt-2 text-white font-bold text-lg rounded-lg p-1"
          />
        </Link>
      </form>
    </div>
  );
}
