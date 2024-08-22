"use client";
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import * as z from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { H3, H4, P } from "~/components/typography";
import { Link, SendHorizonalIcon, SendIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FloatingDock } from "~/components/floating-dock";

const formSchema = z.object({
    name: z.string({
        required_error: "Name is required.",
    }).min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string({
        required_error: "Email is required.",
    }).email({
      message: "Invalid email address.",
    }),
    company: z.string(),
    category: z.string({
        required_error: "Please select a category.",
    }),
    message: z.string().min(1, {
      message: "Message can not be empty.",
    }),
  })

export function ContactForm(){
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
        email: "",
        company: "",
        category: "",
        message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <>
    <H3 className="mt-4">Send a mail Directly</H3>
    <p className="mb-4 text-sm text-muted-foreground">Please feel free to contact me regarding any <span className="text-orange-200">Opportunities</span>, <span className="text-orange-200">Queries</span> or if you <span className="text-orange-200">Need some Help</span> with your project(s).</p>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center gap-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-muted-foreground">
                <H4 className="text-base">
                Name
                </H4>
              </FormLabel>
              <FormControl>
                <Input placeholder="Ayush" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-muted-foreground">
                <H4 className="text-base">
                Company Name
                </H4>
              </FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                <H4 className="text-base">
                Reason
                </H4>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason for your mail." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Regarding an Opportunity">Regarding an Opportunity</SelectItem>
                  <SelectItem value="Need help with a Project/Idea">Need help with a Project/Idea</SelectItem>
                  <SelectItem value="Query Regarding a Topic/Technology">Query Regarding a Topic/Technology</SelectItem>
                  <SelectItem value="Need Guidance">Need Guidance</SelectItem>
                  <SelectItem value="Need to meet in-person">Want to meet in-person</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-muted-foreground">
                <H4 className="text-base">
                Email
                </H4>
              </FormLabel>
              <FormControl>
                <Input placeholder="mail@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-muted-foreground">
                <H4 className="text-base">
                Message
                </H4>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center">
        <FloatingDock items={
                    [
                        {
                            title: "GitHub",
                            icon: <FaGithub className="size-10" />,
                            href: ""
                        },
                        {
                            title: "LinkedIn",
                            icon: <FaLinkedin className="size-10" />,
                            href: ""
                        },
                        {
                            title: "X.com",
                            icon: <FaXTwitter className="size-10" />,
                            href: ""
                        },
                        {
                            title: "Instagram",
                            icon: <FaInstagram className="size-10" />,
                            href: ""
                        },
                        {
                            title: "Discord",
                            icon: <FaDiscord className="size-10" />,
                            href: ""
                        }

                    ]
                } />
        <Button type="submit" size='lg'>
            <H3 className="flex items-center">
                Send Mail
                <SendHorizonalIcon className="size-7 ml-2" />
            </H3>
        </Button>
        </div>
      </form>
    </Form>
    </>
  )
}