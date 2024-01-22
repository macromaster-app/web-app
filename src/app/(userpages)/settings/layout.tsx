// import { Metadata } from "next";
"use client";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { SidebarNav } from "@/components/Settings/sidebar-nav";
import { useSession } from "next-auth/react";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
  },
  {
    title: "Change Password",
    href: "/settings/change-password",
  },
  {
    title: "Change Email",
    href: "/settings/change-email",
  },
  {
    title: "Delete Account",
    href: "/settings/delete-account",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

// const sessionData = async () => {
//   const session = await getSession();
//   console.log(session);
// };

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const session = useSession();
  const provider = session.data?.user.provider;
  return (
    <>
      <div className=" space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5 flex flex-col">
            {provider === "register" || provider === "signin" ? (
              <SidebarNav items={sidebarNavItems} />
            ) : (
              <SidebarNav items={[sidebarNavItems[0], sidebarNavItems[3]]} />
            )}
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
