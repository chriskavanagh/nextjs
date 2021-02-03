import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Image src="/vercel.svg" width={126} height={75} />
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
        <div className="brger">&#9776;</div>
      </div>
      <style jsx>
        {`
        .nav-wrapper {
          margin-right: 1rem;
        }
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
            margin-left: 0rem;
          }
        }
        {
        .nav-link {
          margin-right: 25px;
          font-size: 18px;
          font-weight: bold;
          color:  #6e6e38;
          padding: 10px 10px;       
        }
        .nav-link:hover {
          background-color: gray;
          color: #c2c22e;
        }
        .logo {
          margin-left: 4rem;
          margin-top: 10px;
          filter: invert(37%) sepia(77%) saturate(258%) hue-rotate(21deg) brightness(94%) contrast(91%);
        }
        .brger {
          display: none;
        }
        @media screen and (max-width: 800px) {
          .nav-link {
            display: none;
          }
        .brger {
          display: block;
          font-size: 34px;          
          color: #4c5010;
        }
        .nav {          
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #b6acac;
        }
        .brger:hover {
          cursor: pointer;
        }
        
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
