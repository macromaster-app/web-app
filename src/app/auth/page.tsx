import UserAuthForm from "@/components/UserAuthForm"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        Small screen
      </div>
      <div className="relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative h-full w-full">
            <Image className="relative shadow-image-shade w-full h-full object-cover" src='/WelcomeHero.jpg' alt="Food in bowls laying on the table" width={4350} height={2900} />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="flex flex-col justify-center items-center gap-4 text-center text-shadow-custom absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-auto text-white w-full px-24">
                <h1 className="font-bold text-4xl text-shadow-lg">Welcome to <span className="text-primary">MacroMaster</span></h1>
                <p className="text-xl text-neutral-300">Achieve your fitness goals effortlessly, ensuring a personalized and enjoyable path to a healthier lifestyle.</p>
                <Button variant={'secondary'}>
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
              {/* Already have an account? Log in */}
              Already a part of MacroMaster? Log in
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground sm:w-[350px]">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}