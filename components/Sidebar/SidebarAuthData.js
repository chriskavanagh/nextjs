import { SidebarAuth } from "./helpers/SidebarData";
import { signIn, signOut, useSession } from "next-auth/client";

const SidebarAuthData = (props) => {
  return (
    <nav className="grid">
      {SidebarAuth.map((item, index) => (
        <>
          <div onClick={() => signIn(item.path)} key={item.id}>
            <div className="icon">{item.icon}</div>
          </div>
          <div onClick={() => signIn(item.path)} key={item.id + 1}>
            <div className={item.cName}>{item.title}</div>
          </div>
        </>
      ))}
    </nav>
  );
};

export default SidebarAuthData;
