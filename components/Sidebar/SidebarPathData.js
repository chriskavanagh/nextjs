import Link from "next/link";
import { SidebarData } from "./helpers/SidebarData";

const SidebarPathData = (props) => {
  return (
    <nav className="grid">
      {SidebarData.map((item, index) => (
        <>
          <Link href={item.path}>
            <div className="icon">{item.icon}</div>
          </Link>
          <Link href={item.path}>
            <div className={item.cName}>{item.title}</div>
          </Link>
        </>
      ))}
    </nav>
  );
};

export default SidebarPathData;
