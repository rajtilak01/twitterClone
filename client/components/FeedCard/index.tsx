import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-700 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/101879265?v=4"
            alt="user image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Rajtilak Pandey</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            dolorum ab placeat corporis. Inventore ullam, quo iusto eveniet
            voluptatum expedita repudiandae ex placeat reiciendis perferendis,
            esse facere aliquid error ipsam?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
             <div>
                <BiMessageRounded/>
             </div>
             <div>
                <FaRetweet/>
             </div>
             <div>
                <AiOutlineHeart/>
             </div>
             <div>
                <BiUpload/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
