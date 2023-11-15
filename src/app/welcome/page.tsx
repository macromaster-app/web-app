import SignInForm from "@/components/SignInForm"
import Welcome from "@/components/Welcome"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Welcome />
      </div>
      <div className="relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Welcome />
        <SignInForm />
      </div>
    </>
  )
}