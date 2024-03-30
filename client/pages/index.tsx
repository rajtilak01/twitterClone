import React, { useCallback } from "react";

import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import {
  BiHash,
  BiHome,
  BiMessage,
  BiNotification,
  BiUser,
} from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphQLClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];
export default function Home() {

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if(!googleToken) return toast.error(`Google Token not found`);

    const { verifyGoogleToken } = await graphQLClient.request(verifyUserGoogleTokenQuery, {token: googleToken})

    toast.success("Verified Success");
    console.log(verifyGoogleToken);

    if(verifyGoogleToken){
      window.localStorage.setItem('__twitter_token', verifyGoogleToken);
    }
  }, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 mo-8">
          <div className="text-2xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sideMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-10">
              <button className="bg-[#1d9bf0] text-lg p-3 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[0.4px] border-r-[0.4px] border-gray-600 h-screen">
          <div className="feed-container">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg py-2">
            <h1 className="my- text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}
