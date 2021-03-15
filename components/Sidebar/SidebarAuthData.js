import { SidebarAuth } from "../../helpers/SidebarData";

const SidebarAuthData = (props) => {
  return (
    <nav className="grid">
      {SidebarAuth.map((item, index) => (
        <>
          <div onClick={() => signIn(item.path)}>
            <div className="icon">{item.icon}</div>
          </div>
          <div onClick={() => signIn(item.path)}>
            <div className={item.cName}>{item.title}</div>
          </div>
        </>
      ))}
    </nav>
  );
};

export default SidebarAuthData;
