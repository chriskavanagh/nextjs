import Link from "next/link";
import { SidebarData } from "./helpers/SidebarData";

const SidebarPathData = (props) => {
  return (
    <nav className="grid">
      {SidebarData.map((item, index) => (
        <>
          <Link href={item.path} className="left" key={item.id}>
            <div className="icon">{item.icon}</div>
          </Link>
          <Link href={item.path} className="right" key={item.id + 1}>
            <div className={item.cName}>{item.title}</div>
          </Link>
        </>
      ))}
    </nav>
  );
};

export default SidebarPathData;
