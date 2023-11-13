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

const GenericStringConstraint = z.string().min(2, 'Required, at least 2 characters').max(20, 'Max 20 characters')

const formSchema = z.object({
  firstName: GenericStringConstraint,
  lastName: GenericStringConstraint,
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password should be at least 8 characters')
  .max(32, 'Password should not exceed 32 characters')
  .refine(password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(password), {
    message: 'Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
  }),
})

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center overflow-y-auto w-full p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          <Input placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              <Button className="w-full" type="submit">Submit</Button>
            </form>
          </Form>
      </div>
    </div>
  )
}

export default Register