import ads from "@/assets/bg.png";
import classp from "@/assets/class.png";
import playground from "@/assets/playground.png";
import swimming from "@/assets/swimming.png";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import SocialLogin from "../social-login/SocialLogin";

function RightSide() {
  return (
    <div>
      <SocialLogin />
      <div>
        <h4 className="text-lg font-medium mt-8">Find Us on</h4>
        <div className="border border-border rounded-t-lg rounded-b-lg mt-6">
          <span className="flex items-center gap-3 border border-b px-4 py-2">
            <FaFacebook /> Facebook
          </span>
          <span className="flex items-center gap-3 border border-b px-4 py-2">
            <FaTwitter /> Twitter
          </span>
          <span className="flex items-center gap-3 px-4 py-2">
            <FaGithub /> Github
          </span>
        </div>
      </div>
      <div className="p-4 bg-muted my-8">
        <h4 className="text-lg font-medium pt-4 pb-6">Q-Zone</h4>
        <div className="flex flex-col gap-4">
          <img src={swimming} alt="" />
          <img src={classp} alt="" />
          <img src={playground} alt="" />
        </div>
      </div>
      <div className="mt-6">
        <img className="w-full object-cover" src={ads} alt="" />
      </div>
    </div>
  );
}

export default RightSide;
