"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "../Icons"
import { SyntheticEvent, useState } from "react"

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Required, at least 8 characters'),
})

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex justify-center items-center overflow-y-auto w-full p-1">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Log In
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Login