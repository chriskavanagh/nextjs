import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { AiOutlineBars } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handle }) => {
  const [session] = useSession();
  //console.log(`%c ${JSON.stringify(session.user.image)}`, "color:#4400ff");
  return (
    <nav className="nav">
      <div onClick={handle} style={{ cursor: "pointer" }} className="bars">
        {/* <FontAwesomeIcon icon={faBars} size="lg" /> */}
        <AiOutlineBars size="2em" style={{ cursor: "pointer" }} />
      </div>
      <Link href="/" className="logo">
        <Image src="/vercel.svg" width={128} height={77} />
      </Link>

      <div className="nav-wrapper">
        <Link href="/">
          <a className="nav-link">{!session ? "Home" : session.user.email}</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
        <Link href="/articles">
          <a className="nav-link">Articles</a>
        </Link>
        <Link href="/ninjas">
          <a className="nav-link">Ninja Listing</a>
        </Link>
        <Link href="/">
          <a className="nav-link">
            {session ? (
              session.user.image ? (
                <img
                  src={session.user.image}
                  style={{
                    width: "30px",
                    borderRadius: "50%",
                    marginBottom: "-7px",
                  }}
                />
              ) : (
                <FontAwesomeIcon icon={faPortrait} size="lg" color="white" />
              )
            ) : (
              <FontAwesomeIcon icon={faPortrait} size="lg" color="white" />
            )}
          </a>
        </Link>

        <div className="brger">&#9776;</div>
      </div>
      <style jsx>
        {`
          .nav-wrapper {
            grid-column: 9/13;
          }
          .nav {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            align-items: center;
            background-color: #477be4;
            padding: 0.3rem;
          }
          .bars {
            grid-column: 1/2;
            justify-self: center;
          }
          .title {
            color: #fff;
            font-size: 21px;
            margin-left: 1.5rem;
          }
          a:last-of-type {
            margin-left: 0rem;
          }

          .nav-link {
            margin-right: 20px;
            font-size: 19px;
            font-weight: bold;
            color: #fff;
            padding: 10px 10px;
          }
          .nav-link:hover {
            background-color: gray;
            color: #c2c22e;
            transition: 1s;
          }
          .logo {
            color: #fff;
            margin-top: 10px;
            filter: invert(37%) sepia(77%) saturate(258%) hue-rotate(21deg)
              brightness(94%) contrast(91%);
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
              color: #fff;
              margin-right: 10px;
            }
            .nav {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              background-color: inherit;
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
