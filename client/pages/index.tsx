import React from "react"
import { Inter } from "next/font/google";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import {BiHash, BiHome, BiMessage, BiNotification, BiUser} from "react-icons/bi"

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title: string,
  icon: React.ReactNode
}

const sideMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHome/>
  },
  {
    title: "Explore",
    icon: <BiHash/>
  },
  {
    title: "Notifications",
    icon: <BsBell/>
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  },
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div  className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
          <BsTwitter/>
          </div>
          <div className="pt-2 text-2xl pr-4">
            <ul>
              {sideMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                key={item.title}>
                  <span>{item.icon}</span>
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
        <div className="col-span-6 border-l-[0.4px] border-r-[0.4px] border-grey-500"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
