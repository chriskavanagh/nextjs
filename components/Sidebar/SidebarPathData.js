import Link from "next/link";
import { SidebarData } from "./helpers/SidebarData";

const SidebarPathData = (props) => {
  return (
    <nav className="grid">
      {SidebarData.map((item, _) => (
        <>
          <Link href={item.path} className="left">
            <div className="icon">{item.icon}</div>
          </Link>
          <Link href={item.path} className="right">
            <div className={item.cName}>{item.title}</div>
          </Link>
        </>
      ))}
    </nav>
  );
};

export default SidebarPathData;
