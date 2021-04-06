import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { faBity } from "@fortawesome/free-brands-svg-icons";

export const SidebarData = [
  {
    id: "1",
    title: "Home",
    path: "/articles",
    icon: <AiIcons.AiFillHome color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "2",
    title: "Reports",
    path: "/about",
    icon: <IoIcons.IoIosPaper color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "3",
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "4",
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "5",
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "6",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle color="white" size="1.4em" />,
    cName: "nav-text",
  },
];

export const SidebarAuth = [
  {
    id: "1",
    title: "Github",
    path: "github",
    icon: <FaIcons.FaGithub color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "2",
    title: "Facebook",
    path: "facebook",
    icon: <FaIcons.FaFacebook color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    id: "3",
    title: "Email",
    path: "/api/auth/signup",
    icon: <AiIcons.AiOutlineMail color="white" size="1.4em" />,
    cName: "nav-text",
  },
];
