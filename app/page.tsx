"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready, authenticated, login, logout, user } = usePrivy();

  if (!ready) return <p>Loading...</p>;

  return (
    <main className="p-8">
      {authenticated ? (
        <>
          <p>Welcome, {user?.email?.address || "User"}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </main>
  );
}
