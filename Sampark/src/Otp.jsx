import { Link } from "react-router-dom";

export default function Otp() {
  return (
    <div className="flex flex-col gap-7 p-10 md:w-screen h-screen justify-center bg-slate-200 items-center">
      <div className="flex flex-col items-center">
        <img
          className="h-28 w-28 rounded-full"
          src="https://th.bing.com/th/id/R.61c18f645044601297cfbbd2a19d14f3?rik=vKM9uAYcI8nVXA&riu=http%3a%2f%2fimages.provenexpert.com%2f41%2f13%2f794e081f80cf37aeaa36482b5678%2facadmedia_full_1690216261.jpg&ehk=%2fgpUA8EfPDjKISnBlSBeV%2fdQcNAYG2U3dqOEmSGGjkQ%3d&risl=&pid=ImgRaw&r=0"
        />
        <h1 className="text-[#FF8C00] font-bold text-5xl">SAMPARK</h1>
      </div>
      <div className="rounded-lg border-dotted border-[3px] border-[#FFD700] p-2">
        <p className="font-medium text-black">
          Otp has been sent to your email registered with College
        </p>
      </div>
      <form className="flex flex-col gap-3 w-[320px] ">
        <label className="font-medium text-black text-lg">Enter Otp</label>
        <div className="flex gap-2 justify-around">
          <input type="text" className="w-10 h-10 rounded-lg" />
          <input type="text" className="w-10 h-10 rounded-lg" />
          <input type="text" className="w-10 h-10 rounded-lg" />
          <input type="text" className="w-10 h-10 rounded-lg" />
        </div>
        <div className="flex justify-between text-red-900 font-medium ">
          <p>* Otp valid for 10 minutes</p>
          <a>Resend Otp</a>
        </div>
        <Link to='/alumni'>
        <input
          type="submit"
          className="bg-[#FF8C00] text-white font-bold p-2 rounded-lg w-full"
        />
        </Link>
      </form>
    </div>
  );
}
