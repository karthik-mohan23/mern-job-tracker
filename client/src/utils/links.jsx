import { RiFileAddLine } from "react-icons/ri";
import { HiMiniWallet } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "Add Job", path: ".", icon: <RiFileAddLine /> },
  { text: "All Jobs", path: "all-jobs", icon: <HiMiniWallet /> },
  { text: "Stats", path: "stats", icon: <IoStatsChart /> },
  { text: "Profile", path: "profile", icon: <CgProfile /> },
  { text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
