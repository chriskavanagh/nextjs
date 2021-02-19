import Head from "next/head";
import Image from "next/image";
// import Auth from "../components/Auth";
//import ArticleList from "../components/ArticleList";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();
  console.log(session);

  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>

      <div>
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
            <button className="login" onClick={() => signIn("facebook")}>
              Facebook SignIn
            </button>
          </div>
        ) : (
          <>
            <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{
                  width: "25px",
                  borderRadius: "50%",
                  marginLeft: "15px",
                }}
              />
            )}
            <button className="logout" onClick={signOut}>
              Sign Out
            </button>
          </>
        )}
        <style jsx>
          {`
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
              margin-left: 15px;
              padding: 5px 17px;
              border-radius: 7px;
              background-color: #b81f1f;
              color: white;
            }
          `}
        </style>
      </div>
    </>
  );
}
