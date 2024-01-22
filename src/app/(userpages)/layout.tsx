import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function UserPagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Toaster />
    </>
  );
}
