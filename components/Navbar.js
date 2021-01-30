import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <h1 className="title">Ninja List</h1>
      </div>
      <div className="nav-wrapper">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
        <Link href="/posts/first-post">
          <a className="nav-link">First Post</a>
        </Link>
        <Link href="/ninjas">
          <a className="nav-link">Ninja Listing</a>
        </Link>
      </div>
      <style jsx>
        {`
        .nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #b6acac;
        }
        .title{
          color: #4c5010;
          font-size: 21px;
          margin-left: 1.5rem;        
        }
        
        {
        a:last-of-type {
            margin-right: 3rem;
          }
        }
        {
        .nav-link {
          margin-right: 25px;
          font-size: 16px;
          font-weight: bold;
          color:  #6e6e38;
          padding: 10px 10px;       
        }
        .nav-link:hover {
          background-color: gray;
          color: #c2c22e;
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
