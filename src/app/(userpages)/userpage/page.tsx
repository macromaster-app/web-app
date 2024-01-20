"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function ProtectedRoute() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return (
      <div>
        This is a protected route.
        <br />
        You will only see this if you are authenticated.
        <Button
          type="submit"
          onClick={() => signOut({ callbackUrl: window.location.origin })}
        >
          Sign Out
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        You are not authenticated.
        <br />
        You will only see this if you are not authenticated.
      </div>
    );
  }
}
