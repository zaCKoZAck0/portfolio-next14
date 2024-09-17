'use client';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { H2, H3, H4 } from '~/components/typography';
import { SendHorizonalIcon, SendIcon } from 'lucide-react';
import { useToast } from '~/components/ui/use-toast';
import { MailSentSuccess } from '~/components/animated-icon';
import { SendEmail } from '~/lib/send-mail';
import { ContactEmailTemplate } from '~/components/email-templates/contact-email';

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    }),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Invalid email address.',
    }),
  company: z.string(),
  category: z.string({
    required_error: 'Please select a category.',
  }),
  message: z.string().min(1, {
    message: 'Message can not be empty.',
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      category: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const res = await SendEmail({
      email: values.email,
      subject: values.category,
      template: ContactEmailTemplate({
        name: values.name,
        company: values.company,
        message: values.message,
        reason: values.category,
      }),
    });

    if (res.error) {
      alert(res.errorMessage);
      toast({
        title: 'Error sending mail',
        description: 'An error occurred while sending the mail.',
        icon: <SendIcon />,
        variant: 'destructive',
      });
      return;
    } else {
      toast({
        title: 'Mail Sent!',
        description: 'I will get back to you as soon as possible.',
        icon: <MailSentSuccess />,
      });
    }
  }
  return (
    <>
      <H2>Send a mail</H2>
      <p className="mb-4 mt-2 text-sm text-muted-foreground">
        Please feel free to contact me regarding any{' '}
        <span className="text-orange-200">Opportunities</span>,{' '}
        <span className="text-orange-200">Queries</span> or if you{' '}
        <span className="text-orange-200">Need some Help</span> with your project/idea.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground">
                    <H4 className="text-base">Name</H4>
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
                    <H4 className="text-base">Company Name</H4>
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
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">Email</H4>
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">Reason</H4>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason for your mail." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Regarding an Opportunity">
                      Regarding an Opportunity
                    </SelectItem>
                    <SelectItem value="Need help with a Project/Idea">
                      Need help with a Project/Idea
                    </SelectItem>
                    <SelectItem value="Query Regarding a Topic/Technology">
                      Query Regarding a Topic/Technology
                    </SelectItem>
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
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">Message</H4>
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Button type="submit">
              <H3 className="flex items-center text-base">
                Send Mail
                <SendHorizonalIcon className="ml-2 size-5 md:size-7" />
              </H3>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
