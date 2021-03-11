import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { faBity } from "@fortawesome/free-brands-svg-icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/articles",
    icon: <AiIcons.AiFillHome color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/about",
    icon: <IoIcons.IoIosPaper color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle color="white" size="1.4em" />,
    cName: "nav-text",
  },
];

export const SidebarAuth = [
  {
    title: "Github",
    path: "github",
    icon: <FaIcons.FaGithub color="white" size="1.4em" />,
    cName: "nav-text",
  },
  {
    title: "Facebook",
    path: "facebook",
    icon: <FaIcons.FaFacebook color="white" size="1.4em" />,
    cName: "nav-text",
  },
];
