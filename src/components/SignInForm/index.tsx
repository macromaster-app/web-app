import React from 'react'
import UserAuthForm from '../UserAuthForm'
import Link from 'next/link'
import ThemeToggle from '../ui/ThemeToggle'

const SignInForm = () => {
  return (
    <div className="flex justify-center items-center lg:p-8 min-h-screen">
        <div className="mx-auto flex h-full w-full flex-col justify-center items-center space-y-6">
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
                  className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    </div>
  )
}

export default SignInForm