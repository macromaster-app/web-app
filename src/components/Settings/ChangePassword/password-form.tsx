"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const passwordFormSchema = z.object({
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .max(32, "Password should not exceed 32 characters")
    .refine(
      (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(password),
      {
        message:
          "Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      }
    ),
  repeat_password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .max(32, "Password should not exceed 32 characters")
    .refine(
      (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(password),
      {
        message:
          "Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      }
    ),
});

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export function PasswordForm() {
  const { toast } = useToast();
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      password: "", // Add an initial value for password
      repeat_password: "", // Add an initial value for repeat_password
    },
  });

  function onSubmit(data: PasswordFormValues) {
    const { setError, clearErrors } = form;
    if (data.password !== data.repeat_password) {
      setError("repeat_password", {
        message: "Passwords do not match",
      });
    } else {
      toast({
        title: "Password successfully changed",
        variant: "success",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="New password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeat_password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Repeat new password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Change password</Button>
      </form>
    </Form>
  );
}
