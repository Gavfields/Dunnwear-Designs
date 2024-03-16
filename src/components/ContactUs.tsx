import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const { toast } = useToast();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, name, message } = data;

    setSending(true);

    const response = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    setSending(false);

    if (response.status === 204) {
      setSent(true);

      toast({
        description: "Your message has been sent!",
      });

      reset();
      return;
    }

    toast({
      description:
        "An error occured while sending your message, try again later.",
      variant: "destructive",
    });
  };

  return (
    <div className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
          Need a project done?
        </h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          We will try to get back to you as soon as possible, thank you for your
          interest!
        </p>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-black dark:text-white">
              Name
            </label>
            <div className="mt-2.5">
              <input
                disabled={sent || sending}
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message.toString()}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-black dark:text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                disabled={sent || sending}
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Your Email Address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message.toString()}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-black dark:text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                disabled={sent || sending}
                {...register("message", { required: "Message is required" })}
                rows={4}
                placeholder="Share your thoughts..."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              ></textarea>
              {errors.message?.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.message.message.toString()}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            disabled={sent}
            type="submit"
            className="bg-[#875034] text-white rounded-sm py-2 w-full block"
          >
            {sent ? "Sent!" : sending ? "Sending..." : "Submit →"}
          </button>
        </div>
      </form>
    </div>
  );
}
