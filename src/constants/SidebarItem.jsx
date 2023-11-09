import { BsFillPersonFill } from "react-icons/bs";
import { FaCarAlt, FaHeadset } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RiSettingsFill, RiLockPasswordFill } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import {IoNewspaper} from 'react-icons/io5'

export const MenuItems = [
  {
    name: "Dashboard",
    icon: (active) => (
      <HiHome
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/",
  },

  {
    name: "My Member",
    icon: (active) => (
      <BsFillPersonFill
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/mymember",
  },

  {
    name: "All Cars",
    icon: (active) => (
      <FaCarAlt
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/allcars",
  },

  {
    name: "Support / Help",
    icon: (active) => (
      <FaHeadset
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/supporthelp",
  },

  {
    name: "Setting",
    icon: (active) => (
      <RiSettingsFill
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/setting",
  },
];

export const SettingsMenuItems = [
  {
    name: "Profile",
    icon: (active) => (
      <BsFillPersonFill
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/setting/profile",
  },

  {
    name: "Privacy Policy",
    icon: (active) => (
      <MdPrivacyTip
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/setting/privacy-policy",
  },

  {
    name: "Change Password",
    icon: (active) => (
      <RiLockPasswordFill
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/setting/change-password",
  },

  {
    name: "Terms & Condition",
    icon: (active) => (
      <IoNewspaper
        className={`text-xl ${active ? "text-[#5B9EFF]" : "text-[#3A3A3A]"}`}
      />
    ),
    path: "/setting/terms-condition",
  },
];
