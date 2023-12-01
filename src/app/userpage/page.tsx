"use client";
import { signOut, useSession } from "next-auth/react";
import { sign } from "crypto";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ProtectedRoute() {
  const session = useSession();
  if (!session) {
    redirect("localhost:3000");
  }
  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
      <Button
        type="submit"
        onClick={() => signOut({ callbackUrl: "localhost:3000" })}
      >
        Sign Out
      </Button>
    </div>
  );
}
