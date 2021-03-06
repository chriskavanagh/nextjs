import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import { DrawerContext } from "../context/drawerContext";
import { signIn, signOut, useSession } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
//import useSideDrawer from "../hooks/useSideDrawer";

export default function Home(props) {
  const [session] = useSession();

  const { closeDrawer } = useContext(DrawerContext);

  return (
    <>
      <Head>
        <title>Auth Demo</title>
        <link
          rel="preload"
          href="/Gotham-Font/GothamBook.ttf"
          as="font"
          crossorigins=""
        />
      </Head>

      <div className="wrapper">
        {!session ? (
          <div className="topDiv">
            <div>
              <Image
                className="gitImg"
                src="/github-logo-png.png"
                alt="git"
                width={60}
                height={60}
                onClick={() => signIn("github")}
              />
            </div>
            <p>GitHub Login</p>

            <FontAwesomeIcon
              icon={faFacebook}
              color="rgb(59, 91, 152)"
              size="3x"
              onClick={() => signIn("facebook")}
            />
            <p>Facebook Login</p>
          </div>
        ) : (
          <>
            {/* <h4>{session.user.name}</h4> */}
            {/* {session.user.image && (
              <img
                src={session.user.image}
                style={{
                  width: "25px",
                  borderRadius: "50%",
                  marginLeft: "15px",
                }}
              />
            )} */}
            <div className="btnWrap">
              <button className="logout" onClick={signOut}>
                <FontAwesomeIcon
                  style={{
                    position: "absolute",
                    left: 11,
                    paddingRight: "10px",
                  }}
                  icon={faGithub}
                  size="lg"
                  pull="left"
                />
                <span className="logoutSpan">Logout</span>
              </button>
            </div>
          </>
        )}
        <style jsx>
          {`
            button {
              margin-left: 25rem;
            }
            .wrapper {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-template-rows: auto;
            }
            .btnWrap {
              grid-column: 6 / span 2;
              justify-self: center;
            }
            i {
              font-size: 48px;
              color: rgb(59, 91, 152);
            }
            p {
              font-weight: bolder;
            }
            .topDiv {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .login {
              padding: 8px 17px;
              border-radius: 7px;
              background-color: #084608;
              color: white;
              display: block;
            }
            .logout {
              padding: 12px 32px;
              border-radius: 7px;
              background-color: #030d4d;
              color: white;
              font-size: 16px;
              font-family: "GothamBook";
              display: block;
              position: relative;
            }
            .logoutSpan {
              margin-left: 15px;
            }
          `}
        </style>
      </div>
    </>
  );
}
