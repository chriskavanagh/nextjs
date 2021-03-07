import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Login() {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <nav>
        {!session ? (
          <button className="login" onClick={() => signIn("github")}>
            GitHub Connect
          </button>
        ) : (
          <>
            <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )}
            <button className="logout" onClick={signOut}>
              Sign Out
            </button>
          </>
        )}
        <style jsx>
          {`
            span {
              margin: 0 15px 15px 0;
            }
            .login {
              margin-left: 15px;
              padding: 8px 17px;
              border-radius: 7px;
              background-color: #084608;
              color: white;
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
      </nav>
    </>
  );
}
